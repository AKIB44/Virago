# Virago Collection

A modern, responsive React website for Virago Collection - a premium bathroom and wardrobe essentials business specializing in custom-printed towels, bathrobes, and luxury items.

## Features

- 🎨 Modern, attractive design with responsive layout
- 📱 Fully responsive for all device sizes
- 🖼️ Product showcase with image galleries
- 🎯 Custom printing services section
- ✨ Feature highlights and benefits
- 🚀 Optimized for performance
- 🎭 Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to Vercel or any other hosting platform.

## Deployment

This project is ready to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
virago/
├── assets/          # Product images
├── src/
│   ├── components/  # React components
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- Update product images in the `assets/` folder
- Modify product data in `ProductShowcase.jsx`
- Adjust colors and styling in component CSS files
- Update business information in `Footer.jsx`

## License

Private project - All rights reserved

