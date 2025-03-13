# Davy Shopify Theme

A minimalist Shopify theme starter template built with Online Store 2.0. This template provides basic styling and error-free page rendering to help you kickstart your Shopify theme development.

This template will also have two features in different branch, one is tailwind support, the other is bootstrap support.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build theme
npm run build

# Deploy to Shopify
npm run deploy
```

## Dependencies

- @shopify/theme-scripts: ^9.0.0
- @shopify/cli: ^3.0.0
- @shopify/theme-lint: ^3.0.0
- SASS: ^1.45.0
- ESLint & Prettier for code quality

## Project Structure

```
├── assets/            # Theme assets (CSS, JS, images)
├── blocks/            # Theme blocks for sections
├── config/            # Theme settings
├── layout/            # Theme layouts
├── locales/           # Translation files
├── sections/          # Theme sections
├── snippets/          # Reusable Liquid snippets
└── templates/         # JSON templates
    ├── cart.json
    ├── collection.json
    ├── customers/     # Account templates
    ├── index.json
    ├── metaobject/    # Custom object templates
    └── product.json
```

## Features

- 🎨 Basic, clean design foundation
- 📱 Responsive layout structure
- ⚡ Performance-optimized setup
- 📦 Standard Shopify templates
- 🔧 Developer-friendly workflow

## Development

### Getting Started
1. Clone this repository
2. run shopify theme dev --store your-store-name.myshopify.com
3. Start to build yours

### Available Commands
- `npm run dev`: Start local development
- `npm run build`: Build theme files
- `npm run deploy`: Deploy to Shopify

## Customization

Manage theme settings in Shopify admin:
`Online Store > Themes > Customize`

Key areas:
- Layout settings
- Color schemes
- Typography
- Content sections
- Header & Footer

## Contributing

No Thanks. Buy me a coffee instead. Paypal: huaxing0345@hotmail.com

## Support

For issues and feature requests, please create an issue in the repository.

## License

MIT License
