# DHL Express India — Open Account (Production Deployment)

## ✅ Unified deployment architecture

This repository is now configured to run as a single production app:
- Backend: `server/` serves the frontend build from `client/dist`
- Frontend: `client/` is built and served by Express
- Public URL: one deployment URL from a single host

### How it works
- In development, the client uses `VITE_API_URL=http://localhost:5000`
- In production, the frontend uses relative API routes: `/api/leads`
- Express serves built React assets and handles API requests on the same origin

---

## ⚡ Local development setup

```bash
cd dhl-india
npm install
npm run install:all
npm run dev
```

Then open:
- Frontend: `http://localhost:5173`
- Backend API proxy: `http://localhost:5173/api/leads`

### Local server-only mode

```bash
cd dhl-india/server
npm run dev
```

### Local client-only mode

```bash
cd dhl-india/client
npm run dev
```

---

## 🧩 Environment variables

Create `.env` files from `.env.example`.

Example values in `.env.example`:
```env
VITE_API_URL=http://localhost:5000
PORT=5000
MONGO_URI=your-mongodb-connection-string
ADMIN_API_KEY=your-admin-api-key
CLIENT_URL=http://localhost:5173
```

### Production environment variables
Set these in your hosting provider:
- `MONGO_URI`
- `ADMIN_API_KEY`
- `CLIENT_URL` (optional; used for CORS allow list)

---

## 🔧 Production build and start commands

Root commands for a single deployment:

```bash
cd dhl-india
npm install
npm run build
npm start
```

- `npm run build` builds the React app and installs nested server/client dependencies
- `npm start` launches the Express backend

---

## 🗂️ Modified files

- `server/server.js`
  - Added dynamic CORS handling
  - Added production static asset serving from `client/dist`
  - Added catch-all fallback route for React Router
  - Added `/api/health` endpoint

- `client/src/services/api.js`
  - Switched API base URL to use `VITE_API_URL` or relative URLs
  - Supports same-origin production deployment

- `package.json`
  - Updated `build` to install nested server/client dependencies and build the frontend
  - Added `start` command for the unified server deployment

- `.gitignore`
  - Added ignore rules for `node_modules`, `client/dist`, `.env`, and build outputs

- `.env.example`
  - Added example development and production environment variables

- `README.md`
  - Updated deployment instructions and final architecture

---

## 🚀 Recommended production deployment

Use a single web service provider such as Render with these settings:
- Root directory: `dhl-india`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Environment variables: `MONGO_URI`, `ADMIN_API_KEY`, `CLIENT_URL`

This gives you one public URL for both the frontend and backend.

---

## 🔌 API Endpoints

| Method | URL | Auth | Description |
|--------|-----|------|-------------|
| POST | /api/leads | None | Submit lead form |
| GET | /api/health | None | Health check |
| GET | /api/leads | x-api-key header | Get all leads |
| PATCH | /api/leads/:id | x-api-key header | Update lead status |

**Admin API Key**: stored in environment variable `ADMIN_API_KEY`
