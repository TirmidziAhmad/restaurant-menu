# 🍽️ Restaurant Menu (React + Vite)

A modern restaurant discovery app built with React, Vite, TypeScript, and Tailwind CSS. Browse restaurants, filter by category, price, and open status, and view detailed restaurant pages with reviews.

## ✨ Features

- 🔍 **Category filtering** — Filter restaurants by cuisine type via URL parameters
- 🏷️ **Client-side filters** — Filter by price range and open/closed status
- ⭐ **Restaurant detail pages** — View descriptions, ratings, and reviews
- ⚡ **Fast development** — Powered by Vite with Hot Module Replacement (HMR)
- 🧩 **Atomic Design** — Components organized into atoms, molecules, and organisms
- 🎨 **Tailwind CSS v4** — Utility-first styling with modern design
- 🔒 **TypeScript** — Full type safety across the codebase

## 🛠️ Tech Stack

| Layer       | Technology                                                                             |
| ----------- | -------------------------------------------------------------------------------------- |
| Framework   | React 19 with Vite                                                                     |
| Routing     | React Router DOM v6                                                                    |
| Language    | TypeScript                                                                             |
| Styling     | Tailwind CSS v4                                                                        |
| HTTP Client | Axios                                                                                  |
| Bundler     | Vite                                                                                   |
| Backend API | [JSON Server (mock)](https://my-json-server.typicode.com/TirmidziAhmad/restaurant-api) |

## 📂 Project Structure

```
src/
├── components/
│   ├── atoms/          # Badge, Button, Checkbox, Select, Star, Typography
│   ├── molecules/      # Rating, RestaurantMetaData
│   └── organisms/      # FilterBar, RestaurantCard, RestaurantGrid
├── pages/
│   ├── Home.tsx        # Home page — restaurant listing with filters
│   └── RestaurantDetail.tsx # Restaurant detail page with reviews
├── services/
│   └── api.ts          # Axios API client for fetching restaurant data
├── types/
│   └── restaurant.ts   # Restaurant and Review type definitions
├── App.tsx             # Route configuration with React Router DOM
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind imports
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## 🗺️ Routes

| Path         | Page              | Description                                                      |
| ------------ | ----------------- | ---------------------------------------------------------------- |
| `/`          | Home              | Restaurant listing with category, price, and open/closed filters |
| `/items/:id` | Restaurant Detail | Full restaurant info with description and reviews                |

## 🔧 How Filtering Works

- **Category** — Filtered by updating URL search params (`?category=Japanese`), which triggers a new API request
- **Price & Open Now** — Filtered **client-side** using `useMemo` on the already-fetched restaurant data

## 🌐 Deployment

**🌍 Live Site:** [https://creative-dusk-32fca6.netlify.app/](https://creative-dusk-32fca6.netlify.app/)

### Netlify

This project is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. The `netlify.toml` handles build settings automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - SPA redirects configured
3. Deploy!

### Manual Deployment

```bash
npm run build
# Upload the contents of the 'dist' folder to your hosting provider
```

---

Built with ❤️ using React, Vite, and TypeScript.
