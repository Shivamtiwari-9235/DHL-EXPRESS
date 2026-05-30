import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL
  || (import.meta.env.DEV ? 'http://localhost:5000' : '');

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Submit lead form
export const submitLead = (data) => api.post('/api/leads', data);

// Get all leads (admin)
export const getAllLeads = (adminKey) =>
  api.get('/api/leads', { headers: { 'x-api-key': adminKey } });

// Update lead status (admin)
export const updateLeadStatus = (id, status, adminKey) =>
  api.patch(`/api/leads/${id}`, { status }, { headers: { 'x-api-key': adminKey } });
