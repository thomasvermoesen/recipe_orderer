import uuid
import json
from pathlib import Path


class ingredient:
    def __init__(self, name: str, quantity: float, unit: str):
        self.name = name
        self.quantity = quantity
        self.unit = unit
        self.uuid = uuid.uuid4()

    def __repr__(self):
        return f"{self.quantity} {self.unit} of {self.name}"
    
    def add_quantity(self, amount: float):
        self.quantity += amount
    
    def __add__(self, other):
        if not isinstance(other, ingredient):
            return NotImplemented
        if self.name != other.name or self.unit != other.unit:
            raise ValueError("Can only add ingredients with same name and unit")
        result = ingredient(self.name, self.quantity + other.quantity, self.unit)
        return result

class step:
    def __init__(self, name, description: str, ingredients: list[ingredient] = None, dependencies: list['step'] = None):
        self.name = name
        self.description = description
        self.ingredients = ingredients if ingredients is not None else []
        self.uuid = uuid.uuid4()
        self.duration = 0  # duration in minutes
        self.dependencies = dependencies if dependencies is not None else []
        self.completed = False
        self.requisites_met = self.__check_dependencies()

    def __repr__(self):
        return f"Step: {self.description} \\ (Duration: {self.duration} mins)"
    
    def __check_dependencies(self):
        return all(dep.completed for dep in self.dependencies)
    
    def check_requisites(self):
        self.requisites_met = self.__check_dependencies()
        return self.requisites_met
    
    def minimum_time_to_complete(self):
        if self.completed:
            return 0
        time = self.duration
        for dep in self.dependencies:
            time += dep.minimum_time_to_complete()
        return time
    
    
class recipe:
    def __init__(self, name: str):
        self.name = name
        self.steps = []
        self.uuid = uuid.uuid4()

    def add_step(self, step: step):
        self.steps.append(step)
    
    def total_duration(self):
        return sum(step.duration for step in self.steps)
    
    def duration_remaining(self):
        return sum(step.duration for step in self.steps if not step.completed)
    
    def __repr__(self):
        description = f"Recipe: {self.name} with {len(self.steps)} steps \\"
        steps_done = sum(1 for step in self.steps if step.completed)
        description += f" ({steps_done}/{len(self.steps)} steps completed) \\"
        duration_left = self.duration_remaining()
        description += f", {duration_left} mins remaining \\"
        return description
    
    def steps_that_can_start(self):
        return [step for step in self.steps if step.requisites_met and not step.completed]
    
    def mark_step_completed(self, step: step):
        step.completed = True
        for s in self.steps:
            s.check_requisites()
    
    def __add__(self, other):
        if not isinstance(other, recipe):
            return NotImplemented
        new_recipe = recipe(f"{self.name} + {other.name}")
        new_recipe.steps = self.steps + other.steps
        return new_recipe
    
    def create_ingredient_list(self):
        ingredient_dict = {}
        for step in self.steps:
            for ing in step.ingredients:
                key = (ing.name, ing.unit)
                if key in ingredient_dict:
                    ingredient_dict[key] += ing.quantity
                else:
                    ingredient_dict[key] = ing.quantity
        ingredient_list = [ingredient(name, quantity, unit) for (name, unit), quantity in ingredient_dict.items()]
        return ingredient_list
    
    def create_dependency_graph(self):
        graph = {}
        for step in self.steps:
            graph[step.name] = [dep.name for dep in step.dependencies]
        return graph
    
    @classmethod
    def from_json_config(cls, config_path: str) -> 'recipe':
        """
        Read a recipe from a JSON configuration file.
        
        Expected JSON format:
        {
            "name": "Recipe Name",
            "steps": [
                {
                    "name": "Step 1",
                    "description": "Step description",
                    "duration": 10,
                    "ingredients": [
                        {
                            "name": "ingredient name",
                            "quantity": 2.5,
                            "unit": "cups"
                        }
                    ],
                    "dependencies": ["Step 2"]  # optional, list of step names this depends on
                }
            ]
        }
        
        Args:
            config_path: Path to the JSON configuration file
            
        Returns:
            recipe: A Recipe object populated with steps and ingredients
            
        Raises:
            FileNotFoundError: If the config file doesn't exist
            json.JSONDecodeError: If the JSON is invalid
            KeyError: If required fields are missing
            ValueError: If the configuration is invalid
        """
        config_path = Path(config_path)
        
        if not config_path.exists():
            raise FileNotFoundError(f"Config file not found: {config_path}")
        
        with open(config_path, 'r') as f:
            config = json.load(f)
        
        # Extract recipe name
        recipe_name = config.get('name')
        if not recipe_name:
            raise ValueError("Recipe config must contain a 'name' field")
        
        # Create recipe instance
        new_recipe = cls(recipe_name)
        
        # Parse steps
        steps_data = config.get('steps', [])
        if not steps_data:
            raise ValueError("Recipe config must contain 'steps' array")
        
        # Create a dictionary to store steps for dependency resolution
        steps_by_name = {}
        step_objects = []
        
        # First pass: Create all step objects
        for step_data in steps_data:
            step_name = step_data.get('name')
            description = step_data.get('description', '')
            duration = step_data.get('duration', 0)
            
            if not step_name:
                raise ValueError("Each step must have a 'name' field")
            
            # Parse ingredients for this step
            ingredients_data = step_data.get('ingredients', [])
            ingredients_list = []
            
            for ing_data in ingredients_data:
                ing_name = ing_data.get('name')
                quantity = ing_data.get('quantity', 0)
                unit = ing_data.get('unit', '')
                
                if not ing_name:
                    raise ValueError(f"Each ingredient in step '{step_name}' must have a 'name' field")
                
                ing = ingredient(ing_name, quantity, unit)
                ingredients_list.append(ing)
            
            # Create step object (without dependencies for now)
            new_step = step(step_name, description, ingredients_list)
            new_step.duration = duration
            
            steps_by_name[step_name] = new_step
            step_objects.append((new_step, step_data))
        
        # Second pass: Resolve dependencies
        for step_obj, step_data in step_objects:
            dependencies = step_data.get('dependencies', [])
            
            for dep_name in dependencies:
                if dep_name not in steps_by_name:
                    raise ValueError(f"Step '{step_obj.name}' depends on '{dep_name}', but that step doesn't exist")
                
                step_obj.dependencies.append(steps_by_name[dep_name])
            
            # Update requisites after setting dependencies
            step_obj.check_requisites()
            
            # Add step to recipe
            new_recipe.add_step(step_obj)
        
        return new_recipe