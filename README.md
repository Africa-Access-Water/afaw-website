# Africa Access Water - Beta Website

A React-based website for Africa Access Water (AFAW), an organization dedicated to empowering rural communities in Africa through solar-powered water infrastructure solutions.

## 🌍 About the Project

Africa Access Water builds solar-powered water infrastructure to improve food security, income, and climate resilience across rural Africa. This website showcases their mission, projects, team, and provides donation capabilities.

## 🚀 Live Demo

[View Live Website](https://afaw-beta-website.vercel.app/)

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.7.0
- **SEO**: React Helmet 6.1.0
- **Styling**: Bootstrap 5 + Custom CSS/SCSS
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Africa-Access-Water/afaw-beta-website.git
   cd afaw-beta-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. **Open your browser**

   The application will automatically open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **SEO Optimized**: Meta tags and structured data using React Helmet
- **Multi-page Navigation**: React Router for seamless page transitions
- **Component-based Architecture**: Reusable React components
- **Dynamic Content**: Data-driven content from JavaScript modules
- **Performance Optimized**: Lazy loading and optimized assets

## 📄 Pages Overview

- **Home** (`/`) - Landing page with hero carousel, mission, stats, and projects
- **Donate** (`/donate`) - Donation page with payment options
- **Contact** (`/contact`) - Contact information and form
- **Team** (`/team`) - Team members and board information
- **Posts** (`/posts`) - Blog posts and updates

## 🔧 Development Guidelines

### Adding New Components

1. Create component files in `src/components/`
2. Use functional components with hooks
3. Add corresponding CSS files in `src/styles/` if needed
4. Export components from their respective files

### Adding New Pages

1. Create page components in `src/pages/`
2. Add route configuration in `src/App.js`
3. Include SEO meta tags using React Helmet
4. Wrap page content with the `Layout` component

### Managing Static Data

- Team data: `src/data/teamData.js`
- Causes/Projects data: `src/data/causesData.js`
- Blog posts: `src/data/postsData.js`

### Styling Guidelines

- Primary styles: `public/css/style.css`
- Bootstrap: `public/css/bootstrap.min.css`
- Component-specific styles: `src/styles/`
- SCSS source files: `public/scss/`

## 🚀 Deployment

The project is configured for deployment on Vercel. Any push to the main branch will trigger an automatic deployment.

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the terms specified in `LICENSE.txt`.

## 📞 Support

For questions or support, please contact the Africa Access Water team through the website's contact page.

## 🌟 Key Statistics (as displayed on website)

- 9 Solar-powered water infrastructure systems in 4 project sites
- 6,000 Households with food security and income
- 30,000 People & 2,500 animals with clean drinking water
- $190,000 USD annually in communities' income from produce

---

**Built with ❤️ for Africa Access Water**
