# Product Analytics Dashboard

> Angular dashboard demonstrating enterprise-level modular architecture, advanced Angular patterns, and clean code principles.

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 📋 Project Overview

This project implements a comprehensive **Product Analytics Dashboard** built with **Angular 20** using **NgModule-based architecture**. While standalone components are the modern Angular approach, this project demonstrates the traditional **modular pattern** to showcase understanding of enterprise legacy codebases and migration strategies. It features advanced data tables, real-time analytics, chart visualizations, and follows SOLID principles with clean separation of concerns.

## ✨ Key Features

### Core Functionality
- **Interactive Analytics Dashboard** - Real-time KPI metrics with calculated statistics
- **Advanced Sortable Data Table** - Click-to-sort headers with visual indicators (↑↓)
- **Dynamic Filtering & Search** - Category-based filtering with debounced search
- **Chart Visualization** - Monthly sales performance charts with Chart.js
- **Pagination System** - Server-side pagination with page information
- **Dark/Light Mode** - Theme toggle with localStorage persistence
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### Advanced Features
- **Repository Pattern** - Data access abstraction layer
- **HTTP Interceptors** - Authentication token injection
- **Reactive Programming** - RxJS with BehaviorSubjects and async pipes
- **OnPush Change Detection** - Performance-optimized rendering strategy
- **Lazy Loading** - Feature modules loaded on-demand
- **SOLID Principles** - Clean architecture with clear separation of concerns

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Angular CLI 20.x

```bash
node --version  # Should be >= 18.x
npm --version   # Should be >= 9.x
ng version      # Should be >= 20.x
```

### Installation & Running

```bash
# Clone repository
git clone https://github.com/MehdiHadizadeh/product-analytics-dashboard-angular.git
cd product-analytics-dashboard-angular

# Install dependencies
npm install

# Start development server
ng serve

# Open http://localhost:4200
# The app includes hot reload for development
```

### Build for Production

```bash
# Production build with optimizations
ng build --configuration production

# Output in dist/ folder with:
# - AOT compilation
# - Tree shaking
# - Minification
# - Bundle optimization

# Deploy to any static hosting (Netlify, Vercel, GitHub Pages)
```

## 📊 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | Angular 20 | Modern web framework |
| **Language** | TypeScript 5.9.2 | Type-safe development |
| **Styling** | Tailwind CSS 3.x | Utility-first CSS |
| **Charts** | Chart.js + ng2-charts | Data visualization |
| **State** | RxJS BehaviorSubjects | Reactive state management |
| **HTTP** | Angular HttpClient | API communication |
| **Forms** | Reactive Forms | Type-safe forms |
| **API** | DummyJSON | Mock REST API |
| **Icons** | Tailwind | Utility icons |

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow Angular Style Guide
- Use TypeScript strict mode
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 📬 Contact

**Mehdi Hadizadeh**
- Email: mehdi.hadizadeh.k@gmail.com
- LinkedIn: [Mehdi Hadizadeh](https://linkedin.com/in/mehdi-hadizadeh/)

---

⭐ **If you found this project helpful, please give it a star!**
