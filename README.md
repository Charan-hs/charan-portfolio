# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI.

## Features

- ✨ Modern and clean design
- 🎨 Customizable color themes (Dark/Light mode)
- 📱 Fully responsive layout
- 🚀 Fast performance with Vite
- 💾 PWA support for offline functionality
- 🎭 Smooth animations with Framer Motion
- 🎯 Type-safe with TypeScript
- 🎨 Material-UI components and styling

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Material-UI (MUI)
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **PWA:** vite-plugin-pwa

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit `src/theme/colors.ts` to customize the color palette:

- **Primary colors:** Main brand colors
- **Secondary colors:** Accent colors
- **Background colors:** Light and dark mode backgrounds
- **Text colors:** Primary and secondary text colors
- **Gradients:** Predefined gradient combinations

### Theme

Edit `src/theme/theme.ts` to customize:

- Typography (fonts, sizes, weights)
- Spacing and layout
- Component styles
- Shadows and elevations
- Border radius

### Personal Information

Update the following files with your information:

1. **Hero Section:** `src/components/Hero.tsx`
   - Update name, title, and description
   - Update social media links

2. **About Section:** `src/components/About.tsx`
   - Update personal introduction
   - Update journey/experience details

3. **Skills Section:** `src/components/Skills.tsx`
   - Add/remove skills
   - Update skill levels

4. **Projects Section:** `src/components/Projects.tsx`
   - Add your projects with images, descriptions, and links
   - Update project tags

5. **Contact Section:** `src/components/Contact.tsx`
   - Update contact information
   - Configure form submission (see CONTACT_SETUP_GUIDE.md for options)
   - Choose between mailto, EmailJS, or custom backend

6. **Footer:** `src/components/Footer.tsx`
   - Update social media links
   - Update personal information

7. **Download CV:** `src/components/Hero.tsx`
   - Replace `public/resume.pdf` with your actual resume
   - Button will automatically download the PDF file

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── theme/
│   │   ├── colors.ts
│   │   └── theme.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## PWA Features

This portfolio works offline thanks to Progressive Web App (PWA) capabilities:

- Service Worker for caching
- Installable on mobile and desktop
- Works without internet connection after first visit
- Automatic updates when online

## Deployment

You can deploy this portfolio to various platforms:

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

1. Update `vite.config.ts` with your base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For questions or feedback, reach out via the contact form on the website.

---

Made with ❤️ using React, TypeScript, and Material-UI
