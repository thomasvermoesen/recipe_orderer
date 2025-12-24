// Recipes data
const RECIPES = {
    master: {
        "name": "Holiday Party Master Recipe",
        "description": "An elegant multi-course collection combining festive cocktails, layered desserts, and frozen treats with shared preparation steps",
        "servings": 8,
        "prepTime": 45,
        "cookTime": 50,
        "waitTime": 150,
        "ingredients": [
            {"name": "Gin", "quantity": 0, "unit": ""},
            {"name": "Graanjenever", "quantity": 0, "unit": ""},
            {"name": "Fresh apple juice", "quantity": 0, "unit": "ml"},
            {"name": "Lemon juice", "quantity": 0, "unit": "ml"},
            {"name": "Honey liqueur", "quantity": 0, "unit": "ml"},
            {"name": "Sugar syrup", "quantity": 0, "unit": "ml"},
            {"name": "Egg white", "quantity": 0, "unit": "ml"},
            {"name": "Whiskey", "quantity": 0, "unit": "ml"},
            {"name": "Armagnac", "quantity": 0, "unit": "ml"},
            {"name": "Bitters", "quantity": 0, "unit": "dashes"},
            {"name": "White rum", "quantity": 0, "unit": "ml"},
            {"name": "Vanilla vodka", "quantity": 0, "unit": "ml"},
            {"name": "Cinnamon syrup", "quantity": 0, "unit": "ml"},
            {"name": "Tonic", "quantity": 0, "unit": "ml"},
            {"name": "Ginger ale", "quantity": 0, "unit": "ml"},
            {"name": "Vanilla syrup", "quantity": 0, "unit": "ml"},
            {"name": "Vodka", "quantity": 0, "unit": "ml"},
            {"name": "Blue curaçao", "quantity": 0, "unit": "ml"},
            {"name": "Porto", "quantity": 0, "unit": "ml"},
            {"name": "Coconut cream", "quantity": 0, "unit": "ml"},
            {"name": "Pineapple juice", "quantity": 0, "unit": "ml"},
            {"name": "Lime juice", "quantity": 0, "unit": "ml"},
            {"name": "Grenadine", "quantity": 0, "unit": "ml"},
            {"name": "Liquor 43", "quantity": 0, "unit": "ml"},
            {"name": "Tequila", "quantity": 0, "unit": "ml"},
            {"name": "Blueberry syrup", "quantity": 0, "unit": "ml"},
            {"name": "Cranberry juice", "quantity": 0, "unit": "ml"},
            {"name": "Pomegranate seeds", "quantity": 0, "unit": "g"},
            {"name": "Pecans, chopped", "quantity": 1, "unit": "cup"},
            {"name": "Granulated sugar", "quantity": 3, "unit": "tbsp"},
            {"name": "Unsalted butter, melted", "quantity": 0.5, "unit": "cup"},
            {"name": "All-purpose flour", "quantity": 1, "unit": "cup"},
            {"name": "Cream cheese", "quantity": 8, "unit": "oz"},
            {"name": "Powdered sugar", "quantity": 1, "unit": "cup"},
            {"name": "Cool whip or whipped cream", "quantity": 2, "unit": "cups"},
            {"name": "Instant vanilla pudding", "quantity": 5.1, "unit": "oz"},
            {"name": "Milk", "quantity": 4, "unit": "cups"},
            {"name": "Instant chocolate pudding", "quantity": 5.1, "unit": "oz"},
            {"name": "Shaved chocolate", "quantity": 1, "unit": "optional"},
            {"name": "Chocolate ice cream", "quantity": 0.5, "unit": "cup"},
            {"name": "Pistachio ice cream", "quantity": 0.5, "unit": "cup"},
            {"name": "Maraschino cherries", "quantity": 2, "unit": "whole"},
            {"name": "Chocolate wafer cookies, finely pulsed", "quantity": 5, "unit": "whole"},
            {"name": "Coconut oil, melted", "quantity": 2.5, "unit": "tsp"},
            {"name": "Semisweet chocolate (61% cacao), chopped", "quantity": 2, "unit": "oz"}
        ],
        "steps": [
            {"id": 1, "name": "Prepare Glassware & Workspace", "description": "Chill all glasses. Prepare workspace with ice, tools, and ingredients organized. Have domed bowl ready for tartufo, baking dish ready for sex in a pan.", "duration": 10, "dependencies": []},
            {"id": 2, "name": "Prepare Crushed Ice", "description": "Crush ice finely for cocktails and tartufo coating. Keep ready.", "duration": 5, "dependencies": []},
            {"id": 3, "name": "Preheat Oven", "description": "Preheat oven to 180°C for sex in a pan crust", "duration": 5, "dependencies": []},
            {"id": 4, "name": "DESSERT TRACK: Start Sex in a Pan Crust", "description": "Mix pecans, sugar, melted butter, and flour. Press into baking dish", "duration": 8, "dependencies": [1, 3]},
            {"id": 5, "name": "DESSERT TRACK: Bake Crust", "description": "Bake crust for 20 minutes until lightly golden", "duration": 20, "dependencies": [4]},
            {"id": 6, "name": "FROZEN TRACK: Start Tartufo Bowl Setup", "description": "Line domed glass bowl with plastic wrap, leaving 4-inch overhang", "duration": 5, "dependencies": [1]},
            {"id": 7, "name": "FROZEN TRACK: Layer Ice Cream & Cherry", "description": "Pack chocolate and pistachio ice cream on each side with maraschino cherry center", "duration": 15, "dependencies": [6]},
            {"id": 8, "name": "FROZEN TRACK: First Long Freeze", "description": "Wrap and freeze tartufo for at least 2 hours (can do overnight)", "duration": 120, "dependencies": [7]},
            {"id": 9, "name": "DESSERT TRACK: Cool Crust", "description": "Remove crust from oven and let cool completely", "duration": 15, "dependencies": [5]},
            {"id": 10, "name": "DESSERT TRACK: Prepare Puddings", "description": "Prepare both vanilla and chocolate puddings with 2 cups milk each for firmer consistency", "duration": 10, "dependencies": []},
            {"id": 11, "name": "DESSERT TRACK: Make Cream Cheese Layer", "description": "Mix cream cheese, powdered sugar, and 1 cup whipped cream until fluffy", "duration": 5, "dependencies": []},
            {"id": 12, "name": "DESSERT TRACK: Layer & Assemble", "description": "Spread cream cheese over crust, then layer vanilla pudding, chocolate pudding, and top with whipped cream", "duration": 10, "dependencies": [9, 10, 11]},
            {"id": 13, "name": "DESSERT TRACK: Refrigerate Sex in a Pan", "description": "Refrigerate assembled dessert for at least 2 hours until set", "duration": 120, "dependencies": [12]},
            {"id": 14, "name": "FROZEN TRACK: Prepare Cookie Coating", "description": "Mix finely pulsed chocolate wafer cookie crumbs with 1 teaspoon coconut oil", "duration": 5, "dependencies": []},
            {"id": 15, "name": "FROZEN TRACK: Second Freeze & Cookie Coat", "description": "After first freeze, press cookie crumb coating onto tartufo, rewrap and freeze 15 minutes", "duration": 15, "dependencies": [8, 14]},
            {"id": 16, "name": "COCKTAIL TRACK: Make Cocktails (Phase 1)", "description": "Make Winter Orchard Sour, Golden Apple Old Fashioned, Apple Pie Highball, Snowy Apple Spritz - all requiring step 1 preparation", "duration": 30, "dependencies": [1, 2]},
            {"id": 17, "name": "FROZEN TRACK: Melt Chocolate for Coating", "description": "Place chopped chocolate in bowl over simmering water, melt, stir in 1.5 tsp coconut oil", "duration": 10, "dependencies": []},
            {"id": 18, "name": "FROZEN TRACK: Unmold & Coat Tartufo", "description": "Invert tartufo onto rack, remove plastic, pour melted chocolate starting from center outward", "duration": 8, "dependencies": [15, 17]},
            {"id": 19, "name": "FROZEN TRACK: Final Freeze Tartufo", "description": "Freeze on rack for at least 5 minutes to harden chocolate", "duration": 5, "dependencies": [18]},
            {"id": 20, "name": "COCKTAIL TRACK: Make Cocktails (Phase 2)", "description": "Make Apple Crumble Shot, Arctic Star Martini, Golden Armagnac Old Fashioned, Midnight Blue Velvet - all requiring step 1", "duration": 25, "dependencies": [1]},
            {"id": 21, "name": "COCKTAIL TRACK: Make Cocktails (Phase 3 - Crushed Ice)", "description": "Make Caribbean Snowstorm and Frosted Forest using prepared crushed ice", "duration": 12, "dependencies": [2]},
            {"id": 22, "name": "COCKTAIL TRACK: Make Remaining Cocktails", "description": "Make Porto Royale, Santa's Sleigh Drop, Blue Reindeer, Honey Fire Bullet, Winter Spice Fizz, and Ginger Cranberry Sparkle", "duration": 20, "dependencies": [1]},
            {"id": 23, "name": "PRESENTATION: Plate & Serve Everything", "description": "Plate tartufo with thin spatula, cut and serve sex in a pan, arrange cocktails - a complete holiday spread!", "duration": 10, "dependencies": [13, 19, 16, 20, 21, 22]}
        ]
    },
    cocktails: {
        "name": "Holiday Cocktail Master Recipe",
        "description": "A collection of festive cocktails, shots and preparation steps for holiday gatherings.",
        "servings": 4,
        "prepTime": 15,
        "cookTime": 0,
        "ingredients": [
            {"name": "Gin", "quantity": 0, "unit": ""},
            {"name": "Graanjenever", "quantity": 0, "unit": ""},
            {"name": "Fresh apple juice", "quantity": 0, "unit": "ml"},
            {"name": "Lemon juice", "quantity": 0, "unit": "ml"},
            {"name": "Honey liqueur", "quantity": 0, "unit": "ml"},
            {"name": "Sugar syrup", "quantity": 0, "unit": "ml"},
            {"name": "Egg white", "quantity": 0, "unit": "ml"},
            {"name": "Whiskey", "quantity": 0, "unit": "ml"},
            {"name": "Armagnac", "quantity": 0, "unit": "ml"},
            {"name": "Bitters", "quantity": 0, "unit": "dashes"},
            {"name": "White rum", "quantity": 0, "unit": "ml"},
            {"name": "Vanilla vodka", "quantity": 0, "unit": "ml"},
            {"name": "Cinnamon syrup", "quantity": 0, "unit": "ml"},
            {"name": "Tonic", "quantity": 0, "unit": "ml"},
            {"name": "Ginger ale", "quantity": 0, "unit": "ml"},
            {"name": "Vanilla syrup", "quantity": 0, "unit": "ml"},
            {"name": "Vodka", "quantity": 0, "unit": "ml"},
            {"name": "Blue curaçao", "quantity": 0, "unit": "ml"},
            {"name": "Porto", "quantity": 0, "unit": "ml"},
            {"name": "Coconut cream", "quantity": 0, "unit": "ml"},
            {"name": "Pineapple juice", "quantity": 0, "unit": "ml"},
            {"name": "Lime juice", "quantity": 0, "unit": "ml"},
            {"name": "Grenadine", "quantity": 0, "unit": "ml"},
            {"name": "Liquor 43", "quantity": 0, "unit": "ml"},
            {"name": "Tequila", "quantity": 0, "unit": "ml"},
            {"name": "Blueberry syrup", "quantity": 0, "unit": "ml"},
            {"name": "Cranberry juice", "quantity": 0, "unit": "ml"},
            {"name": "Pomegranate seeds", "quantity": 0, "unit": "g"}
        ],
        "steps": [
            {"id": 1, "name": "Prepare Glassware", "description": "Chill glasses in freezer or fill with ice water while preparing drinks. For glasses requiring rims (sugar, cinnamon), moisten rim with lime/lemon juice first. Prepare all coupe glasses, old fashioned glasses, highballs, wine glasses, tumblers, and shot glasses.", "duration": 5, "dependencies": []},
            {"id": 2, "name": "Prepare Crushed Ice", "description": "Crush ice finely using ice crusher or blender for drinks requiring crushed ice (Frosted Forest, Caribbean Snowstorm). Have ready for immediate use.", "duration": 5, "dependencies": []},
            {"id": 3, "name": "Winter Orchard Sour", "description": "Dry shake egg white first without ice for 10 seconds to create foam. Then add ice and shake all ingredients vigorously for 10-12 seconds. Strain into chilled coupe glass. Garnish with cinnamon powder and optional dried apple slice.", "duration": 8, "dependencies": [1]},
            {"id": 4, "name": "Golden Apple Old Fashioned", "description": "Fill mixing glass with ice. Add whiskey/armagnac, apple juice, sugar syrup, and bitters. Stir for 15-20 seconds until well chilled. Strain over large ice cube in old fashioned glass. Express orange zest over drink and add mini cinnamon stick.", "duration": 6, "dependencies": [1]},
            {"id": 5, "name": "Apple Pie Highball", "description": "Fill highball glass with ice. Add rum/vodka, apple juice, and cinnamon syrup in order. Stir gently to combine. Top with tonic or ginger ale. Garnish with apple fan and cinnamon sugar rim.", "duration": 4, "dependencies": [1]},
            {"id": 6, "name": "Snowy Apple Spritz", "description": "Fill wine glass with ice. Add apple juice, lemon juice, and vanilla syrup. Stir gently. Top with ginger beer. Garnish with thin apple slice and star anise.", "duration": 4, "dependencies": [1]},
            {"id": 7, "name": "Apple Crumble Shot", "description": "Shake honey liqueur, apple juice, and cream with ice for 10-12 seconds. Strain into shot glass. Add nutmeg sprinkle and cinnamon sugar rim.", "duration": 3, "dependencies": [1]},
            {"id": 8, "name": "Arctic Star Martini", "description": "Add gin, passion fruit jenever, lemon juice, and vanilla syrup to shaker with ice. Shake vigorously for 10-12 seconds. Strain into chilled coupe. Garnish with half passion fruit and serve with mini sparkler for show.", "duration": 8, "dependencies": [1]},
            {"id": 9, "name": "Golden Armagnac Old Fashioned", "description": "Stir armagnac, sugar syrup, and bitters with ice in mixing glass for 15-20 seconds. Strain over large ice cube in old fashioned glass. Garnish with orange zest and edible gold powder.", "duration": 6, "dependencies": [1]},
            {"id": 10, "name": "Midnight Blue Velvet", "description": "Dry shake vodka, blue curaçao, lemon juice, sugar syrup, and egg white for 10 seconds without ice. Add ice and shake vigorously for 10-12 seconds. Strain into chilled coupe. Top with silver sugar pearls on foam.", "duration": 8, "dependencies": [1]},
            {"id": 11, "name": "Porto Royale", "description": "Fill wine glass with ice. Add porto, gin, lemon juice, and sugar syrup. Stir gently. Top with tonic. Garnish with rosemary sprig and dried orange slice.", "duration": 4, "dependencies": [1]},
            {"id": 12, "name": "Caribbean Snowstorm", "description": "Shake white rum, coconut cream, pineapple juice, and lime juice with ice for 10-12 seconds. Strain into tumbler filled with crushed ice. Top with thick layer of coconut flakes.", "duration": 6, "dependencies": [1, 2]},
            {"id": 13, "name": "Santa's Sleigh Drop", "description": "Layer shot in shot glass: pour grenadine first. Slowly pour Liquor 43 over back of bar spoon. Repeat with vanilla vodka. Creates three distinct red-gold layers.", "duration": 3, "dependencies": [1]},
            {"id": 14, "name": "Blue Reindeer", "description": "Shake tequila, blue curaçao, and lime juice with ice for 10-12 seconds. Strain into shot glass. Garnish with mini lime wheel.", "duration": 3, "dependencies": [1]},
            {"id": 15, "name": "Honey Fire Bullet", "description": "Shake honey liqueur, whiskey, and lemon juice with ice for 10-12 seconds. Strain into shot glass. Add cinnamon sugar rim.", "duration": 3, "dependencies": [1]},
            {"id": 16, "name": "Winter Spice Fizz", "description": "Fill highball glass with ice. Add lime juice and cinnamon syrup. Stir gently. Top with ginger ale. Garnish with flambéed rosemary sprig for aroma and star anise.", "duration": 4, "dependencies": [1]},
            {"id": 17, "name": "Frosted Forest", "description": "Fill highball glass with crushed ice. Add blueberry syrup and lemon juice. Top with tonic. Stir lightly. Garnish with sugar rim and blue glitter for festive effect.", "duration": 4, "dependencies": [1, 2]},
            {"id": 18, "name": "Ginger Cranberry Sparkle", "description": "Shake cranberry juice, lemon juice, and sugar syrup with ice for 10-12 seconds. Strain into highball or coupe with ice. Top with ginger ale. Garnish with flambéed rosemary and pomegranate seeds.", "duration": 5, "dependencies": [1]}
        ]
    },
    sex_in_a_pan: {
        "name": "Sex in a Pan",
        "description": "A decadent layered dessert with pecan crust, cream cheese, vanilla pudding, chocolate pudding, and whipped cream",
        "servings": 12,
        "prepTime": 30,
        "cookTime": 20,
        "ingredients": [
            {"name": "Pecans, chopped", "quantity": 1, "unit": "cup"},
            {"name": "Granulated sugar", "quantity": 3, "unit": "tbsp"},
            {"name": "Unsalted butter, melted", "quantity": 0.5, "unit": "cup"},
            {"name": "All-purpose flour", "quantity": 1, "unit": "cup"},
            {"name": "Cream cheese", "quantity": 8, "unit": "oz"},
            {"name": "Powdered sugar", "quantity": 1, "unit": "cup"},
            {"name": "Cool whip or whipped cream", "quantity": 2, "unit": "cups"},
            {"name": "Instant vanilla pudding", "quantity": 5.1, "unit": "oz"},
            {"name": "Milk", "quantity": 4, "unit": "cups"},
            {"name": "Instant chocolate pudding", "quantity": 5.1, "unit": "oz"},
            {"name": "Shaved chocolate", "quantity": 1, "unit": "optional"}
        ],
        "steps": [
            {"id": 1, "name": "Preheat Oven", "description": "Preheat oven to 180°C", "duration": 5, "dependencies": []},
            {"id": 2, "name": "Prepare Baking Dish", "description": "Spray a 9x13 inch baking dish with cooking spray", "duration": 2, "dependencies": []},
            {"id": 3, "name": "Mix Crust", "description": "In a mixer combine pecans, granulated sugar, melted butter, and flour", "duration": 5, "dependencies": []},
            {"id": 4, "name": "Press Crust", "description": "Press the crust mixture into the prepared baking dish", "duration": 3, "dependencies": [2, 3]},
            {"id": 5, "name": "Bake Crust", "description": "Bake crust for about 20 minutes until lightly golden", "duration": 20, "dependencies": [1, 4]},
            {"id": 6, "name": "Cool Crust", "description": "Let the crust cool completely", "duration": 15, "dependencies": [5]},
            {"id": 7, "name": "Prepare Vanilla Pudding", "description": "Prepare vanilla pudding with 2 cups milk according to package instructions for firmer consistency", "duration": 5, "dependencies": []},
            {"id": 8, "name": "Prepare Chocolate Pudding", "description": "Prepare chocolate pudding with 2 cups milk according to package instructions for firmer consistency", "duration": 5, "dependencies": []},
            {"id": 9, "name": "Mix Cream Cheese Layer", "description": "In mixer combine cream cheese, powdered sugar, and 1 cup whipped cream. Mix until light and fluffy", "duration": 5, "dependencies": []},
            {"id": 10, "name": "Spread Cream Cheese", "description": "Spread cream cheese mixture evenly over cooled crust", "duration": 5, "dependencies": [6, 9]},
            {"id": 11, "name": "Layer Vanilla Pudding", "description": "Spread vanilla pudding over cream cheese layer", "duration": 3, "dependencies": [7, 10]},
            {"id": 12, "name": "Layer Chocolate Pudding", "description": "Spread chocolate pudding over vanilla pudding layer", "duration": 3, "dependencies": [8, 11]},
            {"id": 13, "name": "Top with Whipped Cream", "description": "Spread remaining whipped cream as the final layer. Top with shaved chocolate if desired", "duration": 5, "dependencies": [12]},
            {"id": 14, "name": "Refrigerate", "description": "Refrigerate for at least 2 hours until set before serving", "duration": 120, "dependencies": [13]}
        ]
    },
    tartufo: {
        "name": "Tartufo",
        "description": "An elegant Italian ice cream dessert with chocolate and pistachio layers, maraschino cherry center, and chocolate coating",
        "servings": 2,
        "prepTime": 20,
        "cookTime": 0,
        "ingredients": [
            {"name": "Chocolate ice cream", "quantity": 0.5, "unit": "cup"},
            {"name": "Pistachio ice cream", "quantity": 0.5, "unit": "cup"},
            {"name": "Maraschino cherries", "quantity": 2, "unit": "whole"},
            {"name": "Chocolate wafer cookies, finely pulsed", "quantity": 5, "unit": "whole"},
            {"name": "Coconut oil, melted", "quantity": 2.5, "unit": "tsp"},
            {"name": "Semisweet chocolate (61% cacao), chopped", "quantity": 2, "unit": "oz"}
        ],
        "steps": [
            {"id": 1, "name": "Prepare Bowl", "description": "Line a small domed glass bowl (4.5-inch-diameter) with plastic wrap, leaving 4-inch overhang on all sides", "duration": 5, "dependencies": []},
            {"id": 2, "name": "Layer Ice Cream", "description": "Pack chocolate ice cream into one side and pistachio into the other side of the bowl", "duration": 10, "dependencies": [1]},
            {"id": 3, "name": "Add Cherry Centers", "description": "Make indentation in each ice cream flavor and place a maraschino cherry in each. Cover cherries with more ice cream", "duration": 5, "dependencies": [2]},
            {"id": 4, "name": "First Freeze", "description": "Wrap in plastic and freeze until firm, at least 2 hours or preferably overnight", "duration": 180, "dependencies": [3]},
            {"id": 5, "name": "Prepare Cookie Crumb Coating", "description": "Mix together finely pulsed chocolate wafer cookie crumbs with 1 teaspoon coconut oil", "duration": 5, "dependencies": []},
            {"id": 6, "name": "Apply Cookie Coating", "description": "Fold back plastic and press crumb mixture onto ice cream. Smooth with offset spatula and rewrap", "duration": 5, "dependencies": [4, 5]},
            {"id": 7, "name": "Second Freeze", "description": "Freeze at least 15 minutes", "duration": 15, "dependencies": [6]},
            {"id": 8, "name": "Melt Chocolate", "description": "Place chopped semisweet chocolate in heatproof bowl over simmering water. Stir until melted then remove from heat. Stir in remaining 1.5 teaspoons coconut oil", "duration": 10, "dependencies": []},
            {"id": 9, "name": "Unmold Tartufo", "description": "Fold back plastic from ice cream. Invert bowl onto wire rack over baking sheet. Wipe outside of bowl with hot cloth to loosen. Lift bowl and remove plastic completely", "duration": 5, "dependencies": [7]},
            {"id": 10, "name": "Coat with Chocolate", "description": "Pour melted chocolate over top starting in center and working outward in one continuous stream", "duration": 3, "dependencies": [8, 9]},
            {"id": 11, "name": "Final Freeze", "description": "Freeze tartufo on rack to harden, at least 5 minutes", "duration": 5, "dependencies": [10]},
            {"id": 12, "name": "Serve", "description": "Transfer to plate with thin metal spatula. If it sticks, dip spatula in hot water and wipe dry", "duration": 5, "dependencies": [11]}
        ]
    }
};

// State management
let currentRecipe = null;
let completedSteps = new Set();
const STORAGE_KEY = 'recipeOrdererState';
// Indexes for quick graph queries (populated per-recipe)
let stepsById = {};
let upwardsMap = {};

// DOM Elements
const recipeDropdown = document.getElementById('recipe-dropdown');
const mainContent = document.getElementById('main-content');
const emptyState = document.getElementById('empty-state');
const recipeName = document.getElementById('recipe-name');
const recipeDescription = document.getElementById('recipe-description');
const servings = document.getElementById('servings');
const prepTime = document.getElementById('prep-time');
const cookTime = document.getElementById('cook-time');
const waitTime = document.getElementById('wait-time');
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
    if (currentRecipe.waitTime) {
        waitTime.textContent = `⏳ Wait: ${currentRecipe.waitTime} min`;
    }

    // Ingredients
    renderIngredients();

    // Steps
    buildIndexes();
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
    
    // Filter out completed steps and separate into available/unavailable
    const incompleteSteps = currentRecipe.steps.filter(step => !completedSteps.has(step.id));
    
    const availableSteps = [];
    const unavailableSteps = [];
    
    incompleteSteps.forEach(step => {
        const isAvailable = checkDependenciesMet(step);
        if (isAvailable) {
            availableSteps.push(step);
        } else {
            unavailableSteps.push(step);
        }
    });
    
    // Sort available steps by longestChainAfterCompletion descending (longest first)
    availableSteps.sort((a, b) => {
        const chainA = longestChainAfterCompletion(a.id);
        const chainB = longestChainAfterCompletion(b.id);
        return chainB - chainA;
    });
    
    // Render available steps first, then unavailable
    const stepsToRender = [...availableSteps, ...unavailableSteps];
    
    stepsToRender.forEach(step => {
        const isAvailable = availableSteps.includes(step);
        
        // Compute longest remaining time-chain after this step is completed
        const chainTime = longestChainAfterCompletion(step.id);

        const dependencyText = step.dependencies.length > 0 
            ? `Requires completion of: Step ${step.dependencies.join(', Step ')}`
            : 'No dependencies - can start anytime!';

        const stepEl = document.createElement('div');
        stepEl.className = 'step-item';
        if (isAvailable) {
            stepEl.classList.add('available');
        }

        stepEl.innerHTML = `
            <div class="step-header">
                <div class="step-number">${step.id}</div>
                <div class="step-title-section">
                    <div class="step-name">${step.name}</div>
                    <div class="step-duration">⏱️ ${step.duration} minutes</div>
                    <div class="step-chain">⏳ Longest remaining chain after this: ${chainTime} minutes</div>
                </div>
            </div>
            <div class="step-description">${step.description}</div>
            <div class="step-dependencies ${step.dependencies.length > 0 ? 'show' : ''}">
                ${dependencyText}
            </div>
            <div class="step-actions">
                <button class="mark-done-btn" ${!isAvailable ? 'disabled' : ''} data-step-id="${step.id}">
                    ${isAvailable ? '✓ Mark as Done' : '⏳ Waiting for dependencies'}
                </button>
            </div>
        `;

        // Add event listener to button
        const btn = stepEl.querySelector('.mark-done-btn');
        btn.addEventListener('click', () => completeStep(step.id));

        stepsList.appendChild(stepEl);
    });
}

function checkDependenciesMet(step) {
    if (step.dependencies.length === 0) return true;
    return step.dependencies.every(depId => completedSteps.has(depId));
}

// Build helper indexes for current recipe: map of id->step and upwards dependencies
function buildIndexes() {
    stepsById = {};
    upwardsMap = {};
    if (!currentRecipe) return;

    currentRecipe.steps.forEach(s => {
        stepsById[s.id] = s;
        upwardsMap[s.id] = [];
    });

    currentRecipe.steps.forEach(s => {
        (s.dependencies || []).forEach(depId => {
            if (upwardsMap[depId]) upwardsMap[depId].push(s.id);
        });
    });
}

// Compute the longest time chain after completing a step (ignores already-completed upward steps)
function longestChainAfterCompletion(stepId, memo = {}) {
    if (memo[stepId] !== undefined) return memo[stepId];
    const ups = upwardsMap[stepId] || [];
    if (ups.length === 0) return memo[stepId] = 0;
    let maxTime = 0;
    for (const upId of ups) {
        // skip already-completed upward steps since they won't contribute
        if (completedSteps.has(upId)) continue;
        const upStep = stepsById[upId];
        if (!upStep) continue;
        const t = upStep.duration + longestChainAfterCompletion(upId, memo);
        if (t > maxTime) maxTime = t;
    }
    memo[stepId] = maxTime;
    return maxTime;
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
