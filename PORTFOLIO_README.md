# My Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Hero Section**: Eye-catching landing page with smooth animations
- **About Section**: Professional introduction with skills showcase and statistics
- **Projects Section**: Portfolio showcase with 6 sample projects
- **Blog Section**: Technical blog posts with tags and metadata
- **Contact Section**: Contact form and social media links
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS animations and transitions throughout
- **Dark/Light Mode**: Automatic theme switching based on system preferences

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **CSS3** - Styling with modern features

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation header with mobile menu
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About section with skills
│   ├── Projects.tsx      # Projects showcase
│   ├── Blog.tsx          # Blog posts section
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer with links
├── App.tsx               # Main app component
├── App.css               # Global app styles
├── index.css             # Base styles
└── main.tsx              # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

1. **Header.tsx** - Your name in the logo
2. **Hero.tsx** - Your introduction and call-to-action
3. **About.tsx** - Your bio, skills, and statistics
4. **Projects.tsx** - Your actual projects with links
5. **Blog.tsx** - Your blog posts
6. **Contact.tsx** - Your contact information and email
7. **Footer.tsx** - Your social media links

### Styling

- Colors and themes are defined using CSS custom properties in `index.css`
- The primary color gradient is `#646cff` to `#535bf2`
- Modify individual component styles in their respective `.css` files

### Images

Replace the emoji placeholders in:
- `Projects.tsx` - Project images
- `Blog.tsx` - Blog post images
- `Hero.tsx` - Hero section visual

You can replace them with actual images by:
1. Adding images to a `public/images/` folder
2. Updating the `image` property to use `<img src="/images/project.jpg" />`

## Deployment

### Deploy to AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/` folder to your S3 bucket

3. Configure CloudFront to serve from the S3 bucket

4. Set up custom domain with Route 53 (optional)

### Deploy to Other Platforms

The built `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Features to Add

Consider adding these features:

- [ ] Blog post routing with React Router
- [ ] CMS integration (Contentful, Sanity, etc.)
- [ ] Contact form backend (EmailJS, Formspree)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] SEO optimization with react-helmet
- [ ] Performance optimization with code splitting
- [ ] Add actual images for projects and blog posts
- [ ] Implement dark mode toggle
- [ ] Add loading animations
- [ ] Create 404 page

## License

MIT License - Feel free to use this template for your own portfolio!

## Contact

- Email: markhung@example.com
- GitHub: github.com/markhung
- LinkedIn: linkedin.com/in/markhung

---

Built with ❤️ using React + TypeScript + Vite
