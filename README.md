# Davy Shopify Theme

A modern, fully customizable Shopify theme designed for optimal performance and user experience. Built with Online Store 2.0 features and best practices, this theme provides a solid foundation for building beautiful e-commerce stores.

## Features

- 🎨 Modern, responsive design with mobile-first approach
- 🔍 SEO and performance optimized
- ♿ Accessibility compliant (WCAG guidelines)
- 🌐 Multi-language support ready
- 📦 Dynamic sections and blocks
- 🛍️ Enhanced shopping experience
- 🚀 Performance-focused architecture
- 🎯 Conversion-optimized layouts

## Theme Structure

```
├── assets/
│   ├── base.css        # Core styles
│   └── theme.js        # Theme JavaScript
├── config/
│   └── settings_schema.json  # Theme settings
├── layout/
│   └── theme.liquid    # Main layout template
├── sections/
│   ├── announcement-bar.liquid
│   ├── css-variables.liquid
│   ├── featured-collection.liquid
│   ├── footer.liquid
│   ├── header.liquid
│   ├── hero.liquid
│   ├── js-variables.liquid
│   ├── meta-tags.liquid
│   ├── related-products.liquid
│   └── main-product.liquid
├── snippets/
│   ├── icon-account.liquid
│   ├── icon-cart.liquid
│   ├── icon-hamburger.liquid
│   └── icon-search.liquid
└── templates/
    ├── index.json      # Homepage template
    └── product.json    # Product template
```

## Key Components

### Sections
- **Header**: Responsive navigation with mobile menu and search
- **Hero**: Customizable hero section for featured content
- **Featured Collection**: Dynamic product grid with filtering
- **Related Products**: Smart product recommendations
- **Footer**: Customizable multi-column footer

### Global Elements
- **CSS Variables**: Theme-wide styling configuration
- **JS Variables**: Global JavaScript configuration
- **Meta Tags**: SEO and social sharing optimization

## Getting Started

1. Install the Shopify CLI:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. Clone and install:
   ```bash
   git clone [repository-url]
   cd dawei-kickstart-shopify-template
   npm install
   ```

3. Start development:
   ```bash
   shopify theme dev
   ```

## Customization

### Theme Settings
Customize through Shopify admin under:
`Online Store > Themes > Customize`

Key customization areas:
- Brand colors and typography
- Header layout and navigation
- Collection grid layouts
- Product page layouts
- Footer content structure

### CSS Architecture
Core styling variables in `sections/css-variables.liquid`:
- Typography scales
- Color schemes
- Layout measurements
- Responsive breakpoints

### JavaScript Modules
Modular JavaScript in `assets/theme.js`:
- Mobile menu functionality
- Quantity selectors
- Media gallery handling
- Dynamic cart updates

## Best Practices

### Performance
- Minimize JavaScript usage
- Optimize image loading
- Use CSS custom properties
- Implement lazy loading

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Color contrast compliance

### Development
- Follow Liquid best practices
- Maintain modular sections
- Document code changes
- Test cross-browser compatibility

## Support

For support and feature requests, please create an issue in the repository.

## License

This theme is licensed under the MIT License. See the LICENSE file for details.
