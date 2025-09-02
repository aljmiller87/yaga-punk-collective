# Next.js + Tina CMS Starter Template

A modern, production-ready starter template for building content-driven websites with Next.js 14 and Tina CMS. This template provides a solid foundation for blogs, business websites, portfolios, and any content-heavy application.

## ✨ Features

- **🚀 Next.js 14** - Latest React framework with App Router
- **📝 Tina CMS** - Visual content management system
- **🎨 TypeScript** - Full type safety and better developer experience
- **🎭 SCSS Modules** - Modular CSS with component-scoped styles
- **📱 Responsive Design** - Mobile-first responsive components
- **🖼️ Image Optimization** - Built-in Next.js image optimization
- **🔍 SEO Ready** - Meta tags and structured data support
- **⚡ Performance** - Optimized for Core Web Vitals
- **🌐 Content Collections** - Organized content structure
- **🎵 Media Management** - Built-in media handling with Tina CMS

## 🏗️ Content Structure

This starter includes pre-configured content collections:

- **Posts** - Blog articles and news
- **Events** - Event management with dates, venues, and ticket links
- **Gallery** - Image galleries with categories and metadata
- **Band Members** - Team/people profiles with social media
- **Videos** - Video content with YouTube integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### 1. Clone the Template

```bash
# Clone this repository
git clone https://github.com/aljmiller87/yaga-punk-collective.git my-project
cd my-project

# Remove the git history and start fresh
rm -rf .git
git init
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

```bash
# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your Tina Cloud credentials
nano .env.local
```

### 4. Tina Cloud Setup

1. Go to [tina.io](https://tina.io) and create an account
2. Create a new project
3. Copy your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`
4. Add them to your `.env.local` file

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## 🔧 Configuration

### Tina CMS Configuration

The CMS is configured in `tina/config.ts`. You can customize:

- Content collections and fields
- Media handling
- Admin interface settings
- Custom components

### Content Modeling

Each content type has a defined schema with fields like:

- **Text fields** - Titles, descriptions, content
- **Rich text** - Formatted content with markdown
- **Images** - Media uploads with optimization
- **Dates** - Event scheduling and content dating
- **Relationships** - Links between content types

### Styling

- **SCSS Modules** - Component-scoped styles
- **CSS Variables** - Theme customization
- **Responsive breakpoints** - Mobile-first design
- **Component library** - Reusable UI components

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── members/           # Team members page
│   └── music/             # Music page
├── components/            # Reusable React components
│   ├── Button/           # Button component
│   ├── Card/             # Card component
│   ├── Header/           # Site header
│   └── Footer/           # Site footer
├── content/               # Content files (managed by Tina)
│   ├── posts/            # Blog posts
│   ├── events/           # Events
│   ├── gallery/          # Gallery images
│   └── bandMembers/      # Team profiles
├── public/                # Static assets
├── styles/                # Global styles and fonts
├── tina/                  # Tina CMS configuration
└── utils/                 # Utility functions
```

## 🎨 Customization

### Adding New Content Types

1. Edit `tina/config.ts`
2. Add new collection to the schema
3. Create corresponding content files
4. Build components to display the content

### Styling Changes

- Modify `styles/theme.css` for global variables
- Update component-specific SCSS files
- Use CSS custom properties for theming

### Component Development

- Create new components in `components/`
- Follow the existing component structure
- Use SCSS modules for styling
- Export from component index files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify

1. Push your code to GitHub
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set environment variables

### Other Platforms

The template works with any platform that supports Next.js. Ensure you:

- Set `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`
- Run `npm run build` during deployment
- Configure your hosting provider for Next.js

## 📚 Available Scripts

- `npm run dev` - Start development server with Tina CMS
- `npm run build` - Build for production with Tina CMS
- `npm run build:no-tina` - Build without Tina CMS
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run setup` - Quick setup script

## 🔍 Troubleshooting

### Common Issues

1. **Tina CMS not loading** - Check environment variables
2. **Build errors** - Ensure all dependencies are installed
3. **Content not updating** - Check Tina Cloud configuration
4. **Styling issues** - Verify SCSS compilation

### Getting Help

- [Tina CMS Documentation](https://tina.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/aljmiller87/yaga-punk-collective/issues)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tina CMS](https://tina.io) for the amazing content management system
- [Next.js](https://nextjs.org) team for the incredible React framework
- The open source community for inspiration and contributions

---

**Happy coding! 🎉**

If you find this template helpful, please give it a ⭐ on GitHub!
