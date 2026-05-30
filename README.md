# DHL Express India — Open Account (MERN Stack)

## ⚡ Local development setup

```bash
# 1. Install root and workspace dependencies
cd dhl-india
npm install
npm run install:all

# 2. Make sure MongoDB is running
# Windows:  net start MongoDB
# Mac/Linux: brew services start mongodb-community

# 3. Start both servers together
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

### Separate start commands (optional)

```bash
cd dhl-india/server
npm run dev
```

```bash
cd dhl-india/client
npm run dev
```

### Notes

- Always start the project from the `dhl-india` folder using `npm run dev`.
- Do not use `npm start` from the root folder, because this project does not define a `start` script.

- The frontend uses `client/.env` with:
  - `VITE_API_URL=http://localhost:5000`
- If you get `Port 5173 is already in use`, stop the process using that port and restart:
  - `netstat -ano | findstr 5173`
  - `taskkill /PID <PID> /F`

### Verified today

- Backend successfully started on `http://localhost:5000`
- Frontend successfully started on `http://localhost:5173`
- Direct POST to `http://localhost:5000/api/leads` returned success

---

## 🔌 API Endpoints

| Method | URL | Auth | Description |
|--------|-----|------|-------------|
| POST | /api/leads | None | Submit form |
| GET | /api/leads | x-api-key header | Get all leads |
| PATCH | /api/leads/:id | x-api-key header | Update status |

**Admin API Key**: `dhl_admin_2025`

---

## ✅ Features
- Radio toggle: Regular shipping → full form, One-time → short form
- Country dropdown with 100+ countries (India pre-selected)
- Form validation (client + server side)
- Redirect to Thank You page after submit
- Social media links → DHL official pages
- FAQ accordion
- Fully responsive
