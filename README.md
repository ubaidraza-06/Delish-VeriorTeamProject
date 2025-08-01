# Delish - Food Delivery Website

A modern, responsive food delivery website built with React, JavaScript, and Tailwind CSS. Features a beautiful design system with custom typography and color palette.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Modern UI**: Clean, professional design with custom design system
- **React Router**: Client-side routing for seamless navigation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Interactive Components**: Forms, navigation, and interactive elements
- **Custom Design System**: Consistent typography, colors, and spacing

## Design System

### Colors
- **Primary**: #CB3A1A (Red)
- **Secondary**: #111111 (Dark Gray)
- **Paragraph**: #74787C (Medium Gray)
- **White**: #ffffff

### Typography
- **Fonts**: Archivo (Headings) and Jost (Body)
- **Heading 1**: 66px/76px (Bold)
- **Heading 2**: 48px/58px (Bold)
- **Heading 3**: 36px/46px (Semi Bold)
- **Heading 4**: 30px/40px (Semi Bold)
- **Heading 5**: 24px/34px (Semi Bold)
- **Heading 6**: 20px/30px (Medium)
- **Paragraph**: 16px/26px (Regular)

### Spacing
- **Container**: 24px gutter
- **Section Padding**: 120px between sections

## Pages

1. **Home**: Hero section, features, popular dishes, and call-to-action
2. **Menu**: Interactive menu with category filtering and special offers
3. **About**: Company story, team, values, and statistics
4. **Contact**: Contact form, location info, business hours, and FAQ

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
delish/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: ES6+ features
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Customization

### Colors
Edit the colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#CB3A1A',
  secondary: '#111111',
  paragraph: '#74787C',
  white: '#ffffff',
}
```

### Typography
Modify font sizes in `tailwind.config.js`:
```javascript
fontSize: {
  'h1': ['66px', { lineHeight: '76px' }],
  'h2': ['48px', { lineHeight: '58px' }],
  // ... more heading sizes
}
```

### Spacing
Adjust spacing values in `tailwind.config.js`:
```javascript
spacing: {
  'container': '24px',
  'gutter': '24px',
  'section': '120px',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support or questions, please contact us at info@delish.com 