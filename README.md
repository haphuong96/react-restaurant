# React Project Template Example

## VS Code Tailwind CSS Setup

For the best development experience with Tailwind CSS, add the following to your workspace's `.vscode/settings.json` file:

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "tailwindCSS.experimental.configFile": "src/index.css"
}
```

## La Planche Web Application

This is a web application for "La Planche" - a gourmet food service specializing in charcuterie and cheese boards. The application features a responsive design with both desktop and mobile views.

### Features

- **Multilingual Support**: Full internationalization with English and French language options
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive UI Components**: Including slide-in modals, carousels, and dropdown menus
- **Product Showcase**: Display of menu items with pricing and ratings

### Project Structure

- `src/commons/`: Reusable components, hooks, and utilities
  - `components/`: Core UI components (Button, Icon, SlideModal, etc.)
  - `i18n/`: Internationalization configuration and translations
  - `services/`: Service layers including storage
- `src/directory/`: Main application code
  - `components/`: Application-specific components
  - `composites/`: Composite components built from core components
  - `pages/`: Page components organized by feature

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Building for Production

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### UI Component Library

This project includes a Storybook component library. To view the component documentation:

```
npm run storybook
```

### Internationalization

The application uses TypeScript-powered internationalization. Translation files are located in:

- `src/commons/i18n/en/index.ts` (English)
- `src/commons/i18n/fr/index.ts` (French)

To add or modify translations, edit these files and the changes will be automatically applied.
