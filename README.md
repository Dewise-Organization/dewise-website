# Dewise Foundation Website

A fast, accessible, and maintainable static website for the Dewise Foundation built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Deployment Status
- **Repository**: https://github.com/Dewise-Organization/dewise-website
- **Live Site**: Will be available at https://dewise-organization.github.io/dewise-website/ after first deployment
- **Auto-Deploy**: Enabled via GitHub Actions on push to `main` branch

## 🛠️ Tech Stack
- **Frontend**: Next.js (SSG with `output: 'export'`)
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **Content**: MDX for Blog/News (content in `content/`)
- **CMS**: Decap CMS (GitHub backend) - accessible at `/admin/`
- **Deployment**: GitHub Pages (free hosting)

## 🚀 Getting Started

### Local Development
1. Install dependencies:
```bash
npm install
```

2. Start the dev server (images auto-synced; MDX auto-loaded):
```bash
npm run dev
```

3. Open http://localhost:3000

### Building & Static Export
```bash
npm run build
npm run export
```

Static files are generated in the `out/` directory. You can preview locally:
```bash
npm run serve
```

## 📝 Content Management

### MDX Content
- **Blog posts**: `content/blog/*.mdx`
- **News posts**: `content/news/*.mdx`
- **CMS access**: Navigate to `/admin/` after deploying

### Image Management
- Place organization photos in the repository `pictures/` folder
- A script automatically copies and updates them into `public/images/` at dev/build time
- Images are optimized and indexed for the gallery component

## 🌐 Features

### Core Pages
- Homepage with hero section and key information
- About page with organization details
- Programs (Community Engagement, Youth Empowerment, Climate Action, Clean Energy)
- Projects showcase with dynamic routing
- Team member profiles
- Partners and impact information
- Contact form
- Donation page

### Advanced Features
- **Multi-language Support**: English (EN) and French (FR)
- **Blog System**: MDX-based blog with rich content support
- **News Section**: Organization updates and announcements
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🚀 Deployment (Free)

### GitHub Pages (Current Setup)
- **Automatic**: GitHub Actions workflow deploys on every push to `main`
- **Manual**: Push the `out/` directory to a `gh-pages` branch
- **URL**: https://dewise-organization.github.io/dewise-website/

### Alternative Platforms
- **Vercel**: Import this repo in Vercel for instant deployment
- **Netlify**: Drag and drop the `out` folder for free hosting

## 🔧 Configuration

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The included workflow will auto-deploy on each push

### Decap CMS Setup
1. After deployment, navigate to `/admin/`
2. Configure `public/admin/config.yml` with your repository details
3. Start creating and editing content directly from the web interface

## 📁 Project Structure
```
dewise/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── content/              # MDX content (blog, news)
├── lib/                  # Utility functions and data
├── public/               # Static assets and admin
├── scripts/              # Build and sync scripts
├── .github/workflows/    # GitHub Actions deployment
└── pictures/             # Source images (auto-synced)
```

## 🎯 Future Enhancements
- User authentication and accounts
- Digital Learning Management System (LMS)
- Advanced analytics and tracking
- Content moderation and user-generated content
- Enhanced CMS capabilities

## 📄 License
MIT

---

**Built with ❤️ for the Dewise Foundation**
