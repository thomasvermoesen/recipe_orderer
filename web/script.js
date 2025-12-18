// Recipes data
const RECIPES = {
    pasta: {
        "name": "Spaghetti Aglio e Olio",
        "description": "Classic Italian garlic and oil pasta - simple, fast, and delicious",
        "servings": 4,
        "prepTime": 5,
        "cookTime": 20,
        "ingredients": [
            {"name": "Spaghetti", "quantity": 400, "unit": "g"},
            {"name": "Garlic", "quantity": 6, "unit": "cloves"},
            {"name": "Olive Oil", "quantity": 100, "unit": "ml"},
            {"name": "Red Chili Pepper", "quantity": 1, "unit": "whole"},
            {"name": "Salt", "quantity": 1, "unit": "tsp"},
            {"name": "Black Pepper", "quantity": 0.5, "unit": "tsp"},
            {"name": "Fresh Parsley", "quantity": 2, "unit": "tbsp"}
        ],
        "steps": [
            {"id": 1, "name": "Boil Water", "description": "Bring a large pot of salted water to a boil", "duration": 10, "dependencies": []},
            {"id": 2, "name": "Prepare Garlic", "description": "Mince the garlic cloves and slice the chili pepper", "duration": 5, "dependencies": []},
            {"id": 3, "name": "Cook Pasta", "description": "Add spaghetti to boiling water and cook until al dente (about 9 minutes)", "duration": 9, "dependencies": [1]},
            {"id": 4, "name": "Infuse Oil", "description": "Heat olive oil in a pan over medium heat. Add garlic and chili pepper, cook until fragrant (about 3 minutes)", "duration": 3, "dependencies": [2]},
            {"id": 5, "name": "Combine", "description": "Drain pasta (reserve 1 cup pasta water), add to oil pan with garlic", "duration": 2, "dependencies": [3, 4]},
            {"id": 6, "name": "Finish", "description": "Toss pasta with oil, add pasta water as needed. Season with salt and pepper", "duration": 2, "dependencies": [5]},
            {"id": 7, "name": "Serve", "description": "Plate pasta, garnish with fresh parsley and more pepper", "duration": 1, "dependencies": [6]}
        ]
    },
    pizza: {
        "name": "Margherita Pizza",
        "description": "Classic Italian pizza with fresh mozzarella, basil, and tomato",
        "servings": 2,
        "prepTime": 15,
        "cookTime": 25,
        "ingredients": [
            {"name": "Pizza Dough", "quantity": 500, "unit": "g"},
            {"name": "Tomato Sauce", "quantity": 200, "unit": "ml"},
            {"name": "Fresh Mozzarella", "quantity": 250, "unit": "g"},
            {"name": "Fresh Basil", "quantity": 10, "unit": "leaves"},
            {"name": "Olive Oil", "quantity": 30, "unit": "ml"},
            {"name": "Salt", "quantity": 1, "unit": "tsp"},
            {"name": "Black Pepper", "quantity": 0.5, "unit": "tsp"}
        ],
        "steps": [
            {"id": 1, "name": "Preheat Oven", "description": "Preheat oven to 475°C (245°C)", "duration": 10, "dependencies": []},
            {"id": 2, "name": "Prepare Workspace", "description": "Dust work surface with flour, prepare baking sheet with parchment paper", "duration": 2, "dependencies": []},
            {"id": 3, "name": "Shape Dough", "description": "Stretch or roll pizza dough into desired shape on prepared sheet", "duration": 5, "dependencies": [2]},
            {"id": 4, "name": "Add Sauce", "description": "Spread tomato sauce evenly over dough, leaving a border for crust", "duration": 2, "dependencies": [3]},
            {"id": 5, "name": "Add Cheese", "description": "Tear fresh mozzarella and distribute evenly over sauce", "duration": 2, "dependencies": [4]},
            {"id": 6, "name": "Drizzle Oil", "description": "Drizzle olive oil over pizza and season with salt and pepper", "duration": 1, "dependencies": [5]},
            {"id": 7, "name": "Bake", "description": "Bake pizza in preheated oven for 12-15 minutes until crust is golden", "duration": 14, "dependencies": [1, 6]},
            {"id": 8, "name": "Add Basil", "description": "Remove from oven and add fresh basil leaves", "duration": 1, "dependencies": [7]},
            {"id": 9, "name": "Cool & Serve", "description": "Let cool for 2 minutes, slice, and serve", "duration": 2, "dependencies": [8]}
        ]
    },
    chocolate_cake: {
        "name": "Chocolate Lava Cake",
        "description": "Rich, decadent chocolate cake with a gooey center",
        "servings": 4,
        "prepTime": 15,
        "cookTime": 15,
        "ingredients": [
            {"name": "Dark Chocolate", "quantity": 200, "unit": "g"},
            {"name": "Butter", "quantity": 150, "unit": "g"},
            {"name": "Eggs", "quantity": 4, "unit": "whole"},
            {"name": "Sugar", "quantity": 100, "unit": "g"},
            {"name": "Flour", "quantity": 30, "unit": "g"},
            {"name": "Vanilla Extract", "quantity": 1, "unit": "tsp"},
            {"name": "Powdered Sugar", "quantity": 30, "unit": "g"},
            {"name": "Butter (for ramekins)", "quantity": 20, "unit": "g"}
        ],
        "steps": [
            {"id": 1, "name": "Preheat Oven", "description": "Preheat oven to 200°C (392°F)", "duration": 10, "dependencies": []},
            {"id": 2, "name": "Prepare Ramekins", "description": "Butter 4 ramekins and dust with powdered sugar, set aside", "duration": 3, "dependencies": []},
            {"id": 3, "name": "Melt Chocolate", "description": "Chop chocolate and melt together with butter in double boiler or microwave", "duration": 5, "dependencies": []},
            {"id": 4, "name": "Beat Eggs", "description": "Beat eggs and sugar together until thick and pale (about 3 minutes)", "duration": 3, "dependencies": []},
            {"id": 5, "name": "Combine", "description": "Fold melted chocolate into eggs, then gently fold in flour and vanilla", "duration": 2, "dependencies": [3, 4]},
            {"id": 6, "name": "Fill Ramekins", "description": "Divide batter evenly among prepared ramekins", "duration": 2, "dependencies": [2, 5]},
            {"id": 7, "name": "Bake", "description": "Bake for 12-14 minutes until edges are firm but center is still soft", "duration": 13, "dependencies": [1, 6]},
            {"id": 8, "name": "Cool Briefly", "description": "Remove from oven and let cool for 1 minute", "duration": 1, "dependencies": [7]},
            {"id": 9, "name": "Unmold & Serve", "description": "Run knife around edges, invert onto plates, dust with powdered sugar", "duration": 2, "dependencies": [8]}
        ]
    }
};

// State management
let currentRecipe = null;
let completedSteps = new Set();
const STORAGE_KEY = 'recipeOrdererState';

// DOM Elements
const recipeDropdown = document.getElementById('recipe-dropdown');
const mainContent = document.getElementById('main-content');
const emptyState = document.getElementById('empty-state');
const recipeName = document.getElementById('recipe-name');
const recipeDescription = document.getElementById('recipe-description');
const servings = document.getElementById('servings');
const prepTime = document.getElementById('prep-time');
const cookTime = document.getElementById('cook-time');
const ingredientsList = document.getElementById('ingredients-list');
const stepsList = document.getElementById('steps-list');
const toggleIngredientsBtn = document.getElementById('toggle-ingredients');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resetBtn = document.getElementById('reset-recipe-btn');

// Event Listeners
recipeDropdown.addEventListener('change', handleRecipeSelection);
toggleIngredientsBtn.addEventListener('click', toggleIngredients);
resetBtn.addEventListener('click', resetRecipe);

// Initialize - restore previous state if exists
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const state = JSON.parse(savedState);
        recipeDropdown.value = state.recipeName;
        if (state.recipeName) {
            loadRecipe(state.recipeName);
            completedSteps = new Set(state.completedSteps);
            renderSteps();
            updateProgress();
        }
    }
}

async function handleRecipeSelection(e) {
    const recipeName = e.target.value;
    if (recipeName) {
        loadRecipe(recipeName);
    } else {
        showEmptyState();
    }
}

async function loadRecipe(recipeName) {
    try {
        if (!RECIPES[recipeName]) {
            throw new Error('Recipe not found');
        }
        
        currentRecipe = RECIPES[recipeName];
        completedSteps = new Set();
        renderRecipe();
        saveState();
    } catch (error) {
        console.error('Error loading recipe:', error);
        alert('Failed to load recipe. Please try again.');
        showEmptyState();
    }
}

function renderRecipe() {
    // Show main content, hide empty state
    mainContent.classList.remove('hidden');
    emptyState.style.display = 'none';

    // Recipe header
    recipeName.textContent = currentRecipe.name;
    recipeDescription.textContent = currentRecipe.description;
    servings.textContent = `👥 Servings: ${currentRecipe.servings}`;
    prepTime.textContent = `⏱️ Prep: ${currentRecipe.prepTime} min`;
    cookTime.textContent = `🔥 Cook: ${currentRecipe.cookTime} min`;

    // Ingredients
    renderIngredients();

    // Steps
    renderSteps();

    // Progress
    updateProgress();
}

function renderIngredients() {
    ingredientsList.innerHTML = '';
    currentRecipe.ingredients.forEach(ingredient => {
        const ingredientEl = document.createElement('div');
        ingredientEl.className = 'ingredient-item';
        ingredientEl.innerHTML = `
            <div class="ingredient-name">☑️ ${ingredient.name}</div>
            <div class="ingredient-quantity">${ingredient.quantity} ${ingredient.unit}</div>
        `;
        ingredientsList.appendChild(ingredientEl);
    });
}

function renderSteps() {
    stepsList.innerHTML = '';
    
    currentRecipe.steps.forEach(step => {
        const isCompleted = completedSteps.has(step.id);
        const dependenciesMet = checkDependenciesMet(step);
        const isAvailable = dependenciesMet && !isCompleted;

        const stepEl = document.createElement('div');
        stepEl.className = 'step-item';
        if (isCompleted) {
            stepEl.classList.add('completed');
        } else if (isAvailable) {
            stepEl.classList.add('available');
        }

        const dependencyText = step.dependencies.length > 0 
            ? `Requires completion of: Step ${step.dependencies.join(', Step ')}`
            : 'No dependencies - can start anytime!';

        stepEl.innerHTML = `
            <div class="step-header">
                <div class="step-number">${step.id}</div>
                <div class="step-title-section">
                    <div class="step-name">${step.name}</div>
                    <div class="step-duration">⏱️ ${step.duration} minutes</div>
                </div>
            </div>
            <div class="step-description">${step.description}</div>
            <div class="step-dependencies ${step.dependencies.length > 0 ? 'show' : ''}">
                ${dependencyText}
            </div>
            ${!isCompleted ? `
                <div class="step-actions">
                    <button class="mark-done-btn" ${!isAvailable ? 'disabled' : ''} data-step-id="${step.id}">
                        ${isAvailable ? '✓ Mark as Done' : '⏳ Waiting for dependencies'}
                    </button>
                </div>
            ` : ''}
        `;

        // Add event listener to button if not completed
        if (!isCompleted) {
            const btn = stepEl.querySelector('.mark-done-btn');
            btn.addEventListener('click', () => completeStep(step.id));
        }

        stepsList.appendChild(stepEl);
    });
}

function checkDependenciesMet(step) {
    if (step.dependencies.length === 0) return true;
    return step.dependencies.every(depId => completedSteps.has(depId));
}

function completeStep(stepId) {
    completedSteps.add(stepId);
    saveState();
    renderSteps();
    updateProgress();
    
    // Check if recipe is complete
    checkRecipeCompletion();
}

function updateProgress() {
    const totalSteps = currentRecipe.steps.length;
    const completedCount = completedSteps.size;
    const percentage = (completedCount / totalSteps) * 100;

    progressFill.style.width = percentage + '%';
    progressText.textContent = `${completedCount} of ${totalSteps} steps completed`;
}

function checkRecipeCompletion() {
    const totalSteps = currentRecipe.steps.length;
    if (completedSteps.size === totalSteps) {
        setTimeout(() => {
            alert(`🎉 Congratulations! You've completed ${currentRecipe.name}! Enjoy your meal!`);
        }, 300);
    }
}

function toggleIngredients() {
    const isHidden = ingredientsList.classList.toggle('hidden');
    toggleIngredientsBtn.textContent = isHidden ? 'Show Ingredients' : 'Hide Ingredients';
}

function resetRecipe() {
    if (confirm('Are you sure you want to reset this recipe? All progress will be lost.')) {
        completedSteps.clear();
        saveState();
        renderSteps();
        updateProgress();
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function showEmptyState() {
    mainContent.classList.add('hidden');
    emptyState.style.display = 'block';
    currentRecipe = null;
    completedSteps.clear();
    saveState();
}

function saveState() {
    const state = {
        recipeName: recipeDropdown.value,
        completedSteps: Array.from(completedSteps)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
