# Staff On TAP - Professional Barista Staffing

A fully responsive HTML website for Staff On TAP, a professional barista staffing service that connects cafes with experienced, pre-vetted baristas for on-demand and permanent shifts.

## Features

- 📱 **Fully Responsive Design** - Works perfectly on all devices from mobile to desktop
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🚀 **Fast Loading** - Optimized images and efficient CSS
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized** - Proper semantic HTML structure
- 💫 **Interactive Elements** - Smooth animations and hover effects

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables and responsive design
- **Bootstrap 5** - Grid system and responsive utilities
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - Typography (Inter, Gill Sans MT, Poppins)

## Project Structure

```
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Main stylesheet with responsive design
│   └── animations.css      # Animation keyframes and effects
├── js/
│   └── main.js            # Interactive functionality
└── README.md              # Project documentation
```

## Getting Started

1. **Clone or download the project files**
2. **Open `index.html` in your web browser**
3. **Or serve via a local web server for best performance:**

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Visit `http://localhost:8000` in your browser**

## Sections Overview

### Header

- Company logo and branding
- Navigation with Contact Us and Sign Up buttons
- Responsive mobile-friendly design

### Hero Section

- Eye-catching background with gradient overlay
- Search functionality for location-based services
- Call-to-action buttons

### About Section

- Company introduction and description
- Side-by-side layout with image and text

### How It Works

- 3-step process explanation
- Visual cards with illustrations
- Clear, concise descriptions

### Statistics

- Key performance metrics (40,000+ shifts covered, 93% fill rate)
- Animated counters (requires JavaScript)

### Trusted By

- Partner and client logos
- Social proof section

### Information Cards

- Service details and pricing information
- Flexible card layout

### Location & Services

- Geographic coverage information
- Service area details

### Testimonials & About

- Company background and experience
- Team information and values

### Call-to-Action

- Final conversion section
- Account creation prompt

### Footer

- Complete site navigation
- Contact information
- Social media links
- Legal pages

## Customization

### Colors

The design uses CSS custom properties (variables) for easy color customization:

```css
:root {
  --Colors-New-Color-500: #7c4088; /* Primary purple */
  --Colors-New-Color-600: #5c2f65; /* Darker purple */
  --Colors-New-Color-100: #d8b9de; /* Light purple */
  --Colors-Neutral-200: #e8e8e8; /* Light gray */
  /* ... more variables in styles/main.css */
}
```

### Typography

The website uses three main font families:

- **Inter** - Primary text and UI elements
- **Gill Sans MT** - Body text and descriptions
- **Poppins** - Headers and emphasis

### Images

Replace placeholder images with actual content:

- Update `src` attributes in the HTML
- Maintain aspect ratios for best results
- Use optimized formats (WebP, AVIF) for better performance

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## Performance Optimization

The website includes several performance optimizations:

- Lazy loading images
- Efficient CSS with minimal repaints
- Debounced scroll and resize events
- Minimal JavaScript footprint

## Accessibility Features

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color ratios
- Reduced motion support for users with vestibular disorders

## Mobile Responsiveness

The design adapts to all screen sizes:

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adjusted layout)
- **Mobile**: 320px - 767px (Stacked layout, simplified navigation)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support regarding this website, please contact:

- Email: support@staffontap.com
- Website: https://staffontap.com
