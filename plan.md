# Recipe Webpage Implementation Plan

## Overview
Create an interactive webpage that loads recipe data from JSON and displays steps in order, allowing users to mark steps as completed. The webpage will track progress and highlight only the steps that are ready to be done based on dependencies.

## Architecture

### 1. **Backend (Python)**
- **Purpose**: Generate or serve JSON recipe data
- **Modifications to main.py**:
  - Add a simple Flask or HTTP server to serve JSON recipe data and static files
  - Create a `/recipes/<recipe_name>.json` endpoint or serve from static files
  - Alternatively, use a simple static file approach with JSON stored in the frontend

### 2. **Frontend (HTML/CSS/JavaScript)**
- Create a new `web/` directory in the project root
  - `index.html` - Main page structure
  - `style.css` - Styling and layout
  - `script.js` - Logic for loading recipes, managing step state, and UI interactions
  - `recipes/` - Directory containing sample JSON recipe files

### 3. **Data Structure (JSON)**
```json
{
  "name": "Recipe Name",
  "description": "Brief description",
  "ingredients": [
    {
      "name": "ingredient name",
      "quantity": 2,
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

## Implementation Steps

### Step 1: Create Web Directory Structure
- Create `web/` folder with subdirectories:
  - `web/index.html`
  - `web/style.css`
  - `web/script.js`
  - `web/recipes/` (for sample JSON files)

### Step 2: Create Sample Recipe JSON Files
- Create at least 2 sample recipes in `web/recipes/`
- Include realistic cooking steps with dependencies

### Step 3: Build Frontend UI (HTML)
- Header with recipe name and description
- Ingredients list section (collapsible)
- Steps section showing:
  - Step number/name
  - Description
  - Duration
  - Status (Not started, In progress, Completed)
  - Mark as Done button (only enabled when dependencies are met)
- Progress bar or counter (X of Y steps completed)
- Recipe selector dropdown to load different recipes

### Step 4: Style with CSS
- Clean, modern design
- Visual indicators for step states:
  - Grayed out/disabled for steps with unmet dependencies
  - Highlighted/available for steps ready to do
  - Checkmark/different color for completed steps
- Responsive design for mobile and desktop
- Smooth transitions and animations

### Step 5: Implement JavaScript Logic
- **Recipe Loading**:
  - Load recipe JSON on page load or via dropdown selection
  - Parse and display recipe data
  
- **Step Management**:
  - Track completed steps in memory (and localStorage for persistence)
  - Calculate which steps are ready to do (all dependencies met)
  - Update UI to show/disable appropriate steps
  
- **User Interactions**:
  - "Mark as Done" button click handler
  - Update step status and re-evaluate dependencies
  - Update progress indicators
  - Enable/disable appropriate steps
  
- **State Persistence**:
  - Save progress to localStorage so it persists across page refreshes
  - Load progress when page loads

### Step 6: Optional Python Backend Enhancement (Future)
- Add Flask to serve the webpage
- Create a `/api/recipes` endpoint to list available recipes
- API endpoint to save/load user progress to a database

## File Structure After Implementation
```
recipe_orderer/
├── main.py
├── pyproject.toml
├── README.md
├── plan.md (this file)
├── src/
│   └── recipe/
│       ├── __init__.py
│       ├── ingredient.py
│       └── step.py
└── web/
    ├── index.html
    ├── style.css
    ├── script.js
    └── recipes/
        ├── pasta.json
        ├── pizza.json
        └── chocolate_cake.json
```

## Key Features
1. ✅ Load recipe from JSON
2. ✅ Display only available steps (dependencies met)
3. ✅ Mark steps as complete with button
4. ✅ Visual feedback for completed steps
5. ✅ Progress tracking
6. ✅ State persistence with localStorage
7. ✅ Responsive design
8. ✅ Multiple recipe support

## Technology Stack
- **Frontend**: Vanilla JavaScript (no frameworks for simplicity)
- **Styling**: CSS3
- **Data Format**: JSON
- **State Management**: JavaScript + localStorage
- **Optional Backend**: Flask (if serving needed)

## Testing & Validation
1. Test with multiple recipes
2. Verify dependency logic works correctly
3. Test localStorage persistence
4. Cross-browser compatibility check
5. Test on mobile devices

## Future Enhancements
- Recipe timer for each step
- Voice/text instructions for hands-free cooking
- Ingredient checklist before starting
- Export/import recipe functionality
- Integration with Python backend for data persistence
- Recipe sharing feature
