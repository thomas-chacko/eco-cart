# 🌱 EcoCart - Sustainable Shopping Platform

A modern, responsive e-commerce website focused on eco-friendly and sustainable products. Built with React, Vite, and Tailwind CSS with a beautiful nature-inspired design.

## ✨ Features

- **🎨 Modern Design**: Clean, nature-themed UI with gradient backgrounds and smooth animations
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **🛍️ Product Catalog**: Filterable product grid with categories
- **🌿 Sustainability Focus**: Eco-friendly branding and messaging throughout
- **📧 Contact Forms**: Interactive contact and newsletter signup forms
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: GSAP-ready components with CSS transitions
- **♿ Accessible**: Built with accessibility best practices

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Animations**: GSAP 3.13.0
- **Icons**: Custom SVG icons
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with navigation
│   ├── About.jsx       # About section with features
│   ├── Products.jsx    # Product catalog with filtering
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with links and newsletter
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── utils/              # Utility functions and constants
│   └── constants.js
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Design Features

### Color Palette
- **Primary**: Green (#10b981) to Emerald (#059669)
- **Secondary**: Teal and nature-inspired greens
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Gradient overlays and hover effects

### Components
- **Hero Section**: Full-screen hero with animated background and CTA buttons
- **About Section**: Company story with statistics and feature highlights
- **Products Section**: Filterable product grid with hover effects
- **Contact Section**: Contact form with company information
- **Footer**: Comprehensive footer with links, social media, and certifications

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts and typography scaling
- Touch-friendly interactive elements

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌟 Key Sections

### Hero Section
- Animated background with floating elements
- Responsive navigation with mobile menu
- Call-to-action buttons with hover effects
- Scroll indicator animation

### Product Catalog
- Category filtering system
- Product cards with ratings and pricing
- Hover effects and quick view functionality
- Load more functionality

### Contact Form
- Form validation and state management
- Contact information display
- FAQ section
- Newsletter signup

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.js` or use CSS custom properties for theme switching.

### Content
Modify the content in `src/utils/constants.js` to update:
- Company information
- Product data
- Navigation links
- Social media links

### Animations
Add GSAP animations in component `useEffect` hooks or create custom animation hooks.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌍 Environmental Impact

This project promotes sustainability through:
- Eco-friendly product focus
- Carbon-neutral messaging
- Green color palette and nature imagery
- Sustainability education content

---

Built with 💚 for a greener future