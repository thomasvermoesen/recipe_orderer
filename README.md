# Recipe Orderer

An interactive recipe management system that helps you cook by displaying recipe steps in the optimal order based on dependencies and time impact.

## Features

✨ **Smart Step Ordering**
- Steps are automatically sorted by longest time-chain impact (critical path)
- Available steps (all dependencies met) always appear at the top
- Unavailable steps show below with clear dependency indicators

⏱️ **Time Chain Analysis**
- Each step displays "Longest remaining chain after this" – the total time needed for dependent steps
- Helps you prioritize which step to tackle first based on its impact on total cooking time

✅ **Step Tracking**
- Mark steps as complete with a single click
- Completed steps disappear from the list automatically
- Progress bar shows overall completion

📋 **Recipe Management**
- Load recipes from JSON format
- Ingredient list (collapsible)
- Track remaining time and step count
- Reset recipes to start over

💾 **State Persistence**
- Your progress is saved to browser localStorage
- Pick up where you left off when you return

## Getting Started

### Quick Start

1. Open `web/index.html` in your browser
2. Select a recipe from the dropdown
3. Follow the steps in order – steps that can start appear at top, sorted by impact
4. Click "✓ Mark as Done" to complete a step
5. Celebrate when all steps are done! 🎉

### Recipe Format

Recipes are stored as JSON with the following structure:

```json
{
  "name": "Recipe Name",
  "description": "What this recipe makes",
  "servings": 4,
  "prepTime": 15,
  "cookTime": 30,
  "ingredients": [
    {
      "name": "ingredient name",
      "quantity": 2.5,
      "unit": "cups"
    }
  ],
  "steps": [
    {
      "id": 1,
      "name": "Step Name",
      "description": "What to do",
      "duration": 10,
      "dependencies": []
    },
    {
      "id": 2,
      "name": "Next Step",
      "description": "What to do next",
      "duration": 15,
      "dependencies": [1]
    }
  ]
}
```

## Project Structure

```
recipe_orderer/
├── main.py                           # Python entry point
├── pyproject.toml                    # Project config
├── plan.md                           # Implementation plan
├── README.md                         # This file
├── src/
│   └── recipe/
│       ├── __init__.py
│       ├── ingredient.py            # Ingredient class
│       └── step.py                  # Step and Recipe classes
├── tests/
│   └── test_step.py                 # Quick tests for Python functions
└── web/
    ├── index.html                   # Main webpage
    ├── style.css                    # Styling
    ├── script.js                    # Frontend logic
    └── recipes/
        ├── pasta.json               # Spaghetti Aglio e Olio recipe
        ├── pizza.json               # Margherita Pizza recipe
        └── chocolate_cake.json      # Chocolate Lava Cake recipe
```

## Sample Recipes

### 🍝 Spaghetti Aglio e Olio
Classic Italian garlic and oil pasta. 7 steps with parallel prep and cooking.

### 🍕 Margherita Pizza
Traditional pizza with fresh mozzarella and basil. 9 steps demonstrating sequential assembly.

### 🍫 Chocolate Lava Cake
Rich, decadent cake with gooey center. 9 steps with parallel prep stages.

## Python Backend

The project includes Python classes for recipe management:

### `ingredient` class
- Stores ingredient name, quantity, and unit
- Supports addition of ingredients with same name/unit
- Can adjust quantity amounts

### `step` class
- Represents a cooking step
- Tracks dependencies on other steps
- Calculates:
  - `minimum_time_to_complete()` – total duration of this step and all dependencies
  - `longest_timechain_after_completion()` – longest duration of dependent steps

### `recipe` class
- Manages collection of steps
- Methods:
  - `add_step()` – add a step to recipe
  - `steps_that_can_start()` – get available steps
  - `mark_step_completed()` – mark step done and update dependents
  - `total_duration()` / `duration_remaining()` – calculate times
  - `from_json_config()` – load recipe from JSON file
  - `create_ingredient_list()` – aggregate all ingredients

## Testing

Run Python tests to validate step dependencies and time calculations:

```bash
python tests/test_step.py
```

This creates a 3-step dependency chain and verifies:
- `longest_timechain_after_completion()` calculations
- `minimum_time_to_complete()` for steps with dependencies
- Recipe time tracking after marking steps complete

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript
- localStorage API
- CSS Grid & Flexbox

Tested on:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Future Enhancements

- 🔊 Voice instructions for hands-free operation
- ⏲️ Step timers with notifications
- 📤 Export/import custom recipes
- 🌐 Web server backend for multi-user support
- 📱 Progressive Web App (PWA) support
- 🍜 Recipe database integration

## License

MIT
                        