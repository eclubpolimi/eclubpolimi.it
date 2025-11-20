# E-Club Polimi Website

## ⚠️ Important Notice

This is a **DRAFT VERSION** of the E-Club Polimi website.

This repository has been shared with you by **Giuseppe Ingrassia (Consultant)** for collaboration purposes.

### 📞 Questions or Issues?

If you have any questions, concerns, or need clarification about this project, please contact:

**Giuseppe Ingrassia**

---

## 🚀 About This Project

This is the official website for the Entrepreneurship Club at Politecnico di Milano (E-Club Polimi). The website showcases our mission, events, team members, and activities.

### Features

- 🏠 **Home Page** - Hero section, core values, what we do, and sponsors
- 👥 **Team Page** - Meet our team members with interactive flip cards
- 📅 **Events Page** - Timeline of our events and activities
- 🎓 **Class Pages** - Dedicated pages for USC 2024, 2025, and 2026
- 🌓 **Dark Mode** - Full dark mode support with theme toggle
- 📱 **Responsive Design** - Works perfectly on all devices

### Tech Stack

- **Framework:** Astro
- **UI Components:** React + shadCN UI
- **Styling:** Tailwind CSS
- **Deployment:** Vercel Serverless
- **Content Platform:** Contentful CMS (GraphQL/REST)
- **Design System:** Webflow variables

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Contentful Environment

Create a `.env` file (or configure Vercel Environment Variables) with your Contentful credentials before wiring data fetching into components:

```
CONTENTFUL_SPACE_ID=xxxx
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_DELIVERY_TOKEN=xxxx
CONTENTFUL_PREVIEW_TOKEN=xxxx
```

These variables are available to your Astro pages via `import.meta.env` and can power server-side loaders or API routes that query Contentful.

### Deploying to Vercel

1. Install the [Vercel CLI](https://vercel.com/docs/cli) and log in.
2. Build locally if desired: `npm run build`.
3. Run `vercel deploy --prod` (or connect the GitHub repo inside the Vercel dashboard for automatic deploys).

Vercel will inject the environment variables from your project settings and serve the built Astro app from its global edge network.

---

## 📁 Project Structure

```
/
├── src/
│   ├── components/       # Reusable React components
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Page routes
│   ├── site-components/  # Webflow/Devlink components
│   └── styles/           # Global styles
├── generated/            # Auto-generated Webflow assets
└── public/              # Static assets
```

---

## 🔒 Collaboration Guidelines

- This is a **draft** - expect changes
- Always pull latest changes before starting work
- Create feature branches for new work
- Test thoroughly before committing
- Contact Giuseppe for any uncertainties

---

## 📝 License

This project is private and for E-Club Polimi use only.

---

**For any questions or support, contact Giuseppe Ingrassia via WhatsApp.**
