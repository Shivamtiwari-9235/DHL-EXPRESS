require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const allowedOrigins = [CLIENT_URL, 'http://localhost:5173', 'http://localhost:3000'].filter(Boolean);

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: origin not allowed'));
  },
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-api-key'],
  credentials: true,
}));

// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: '✅ DHL India API is running', time: new Date().toISOString() });
});

// API routes
app.use('/api/leads', leadRoutes);

// Serve client build in production
const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
const fs = require('fs');

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
} else if (process.env.NODE_ENV === 'production') {
  console.warn('⚠️  Client build not found at:', clientBuildPath);
  console.warn('Make sure to run: npm run build');
  app.get('*', (req, res) => {
    res.status(404).json({ 
      error: 'Frontend not built yet',
      path: clientBuildPath,
      message: 'Run npm run build to generate client files'
    });
  });
} else {
  app.get('/', (req, res) => {
    res.json({ status: '✅ DHL India API is running', time: new Date().toISOString() });
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
