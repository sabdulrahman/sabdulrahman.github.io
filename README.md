# Abdul Rahman Shaikh - Portfolio Website

A modern, professional portfolio website built with vanilla HTML, CSS, and JavaScript. Features a stunning animated background, glassmorphism navigation, and smooth animations.

## 🚀 Quick Start

Simply open `index.html` in your browser, or deploy to GitHub Pages.

### Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
portfolio/
├── index.html              # Homepage
├── about.html              # About page (to be created)
├── work.html               # Work/Projects page (to be created)
├── contact.html            # Contact page (to be created)
├── README.md               # This file
│
├── css/
│   ├── main.css            # Main stylesheet (imports all others)
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── reset.css           # CSS reset and base styles
│   ├── utilities.css       # Utility classes
│   │
│   ├── components/
│   │   ├── nav.css         # Navigation component
│   │   ├── buttons.css     # Button components
│   │   ├── social.css      # Social links component
│   │   └── background.css  # Animated background
│   │
│   └── sections/
│       └── hero.css        # Hero section styles
│
├── js/
│   ├── main.js             # Main JavaScript entry point
│   │
│   ├── components/
│   │   └── navigation.js   # Navigation functionality
│   │
│   └── utils/
│       ├── smoothScroll.js # Smooth scrolling utility
│       └── animations.js   # Animation utilities
│
└── assets/
    ├── images/             # Image assets
    │   ├── favicon.png
    │   ├── og-image.png
    │   └── ...
    │
    ├── fonts/              # Custom fonts (if any)
    └── resume.pdf          # Resume download
```

## 🎨 Design System

### Colors

```css
--color-bg: #050508;              /* Primary background */
--color-text: #f0f0f5;            /* Primary text */
--color-text-muted: #8a8a9a;      /* Muted text */
--color-accent: #6b7fd4;          /* Blue accent */
--color-accent-warm: #c4a57b;     /* Gold accent */
```

### Typography

- **Display Font**: Cormorant Garamond (elegant serif)
- **Body Font**: Outfit (modern sans-serif)

### Components

All components follow BEM naming convention:
- `.component`
- `.component__element`
- `.component--modifier`

## 🔧 Customization

### Changing Colors

Edit `css/variables.css` to modify the color scheme:

```css
:root {
    --color-accent: #your-color;
    --color-accent-warm: #your-color;
}
```

### Adding New Pages

1. Create a new HTML file (e.g., `about.html`)
2. Copy the structure from `index.html`
3. Create corresponding section styles in `css/sections/`
4. Update navigation links

### Adding New Components

1. Create CSS file in `css/components/`
2. Import it in `css/main.css`
3. Create JS module in `js/components/` if needed
4. Import and initialize in `js/main.js`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Deployment

### GitHub Pages

1. Push to your GitHub repository
2. Go to Settings > Pages
3. Select "main" branch and "/" (root)
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify / Vercel

Simply connect your repository and deploy automatically.

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 👤 Author

**Abdul Rahman Shaikh**
- GitHub: [@sabdulrahman](https://github.com/sabdulrahman)
- LinkedIn: [@iamsabdurahman](https://www.linkedin.com/in/iamsabdurahman/)
- Email: iamsabdurahman@gmail.com
