# Shipment System Client

A modern, full-stack shipment management system built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript support for better development experience
- **Fast Development**: Turbopack for lightning-fast development builds
- **Code Quality**: ESLint configuration for consistent code style
- **App Router**: Next.js 13+ app directory structure for better performance

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.17 or later)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Shipment-System-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Project

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
Build the application for production:
```bash
npm run build
```

### Production Server
Start the production server:
```bash
npm run start
```

### Code Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
Shipment-System-Client/
├── src/
│   └── app/                    # Next.js App Router
│       ├── page.tsx            # Home page component
│       ├── layout.tsx          # Root layout component
│       ├── globals.css         # Global styles
│       └── favicon.ico         # Site favicon
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
└── README.md                  # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: React 19
- **Development**: Turbopack
- **Linting**: ESLint with Next.js configuration

## 🔧 Configuration

### TypeScript
The project uses TypeScript for type safety. Configuration is in `tsconfig.json`.

### Tailwind CSS
Tailwind CSS is configured for utility-first styling. Configuration is in `tailwind.config.ts`.

### Import Aliases
The project uses `@/*` import alias for cleaner imports:
```typescript
import { Component } from '@/components/Component'
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules
- Use Tailwind CSS for styling
- Keep components small and focused

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

### Git Workflow
1. Create feature branches from main
2. Make small, focused commits
3. Write descriptive commit messages
4. Submit pull requests for review

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [TypeScript documentation](https://www.typescriptlang.org/docs)
3. Consult the [Tailwind CSS documentation](https://tailwindcss.com/docs)

---

**Happy coding! 🎉**
