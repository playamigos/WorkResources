# Company Resources

A static website for organizing and searching company resources, hosted on GitHub Pages.

## 📁 Structure

```
WorkResources/
├── index.html              # Main webpage
├── generate-resources.js   # Script to scan Resources folder
├── resources.json         # Auto-generated list of resources
└── Resources/             # All resource files
    ├── AI Prompting/      # Section folder
    ├── Automation/        # Section folder
    └── Channel Guides/    # Section folder
        └── *.md          # Markdown resource files
```

## 🚀 Quick Start

### Viewing the Site

Open `index.html` in your browser or visit the GitHub Pages URL.

### Adding New Resources

1. Add your `.md` file to the appropriate section folder in `Resources/`
2. Run the generation script:
   ```bash
   node generate-resources.js
   ```
3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Add new resources"
   git push
   ```

### Creating a New Section

1. Create a new folder inside `Resources/`
2. Add `.md` files to the folder
3. Run `node generate-resources.js`
4. Commit and push

## ✨ Features

- 🔍 Real-time search across all resources
- 📁 Automatic organization by sections
- 🎯 Collapsible section views
- 📱 Responsive design
- 🚀 Static site (no backend needed)

## 🛠️ Development

The `generate-resources.js` script automatically scans the `Resources/` directory and creates a `resources.json` file that the website uses to display all available resources.

**Important:** Always run `node generate-resources.js` after adding or removing resource files.

## 📝 Note

The `resources.json` file should be committed to the repository so GitHub Pages can serve it properly.
