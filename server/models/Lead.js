const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  shippingType: {
    type: String,
    enum: ['regular', 'one-time'],
    required: [true, 'Shipping type is required'],
  },
  firstName:    { type: String, required: true, trim: true },
  lastName:     { type: String, required: true, trim: true },
  phone:        { type: String, required: true },
  email:        { type: String, required: true, lowercase: true },
  // Regular shipping extra fields
  companyName:  { type: String, trim: true },
  address:      { type: String, trim: true },
  postalCode:   { type: String, trim: true },
  city:         { type: String, trim: true },
  country:      { type: String, default: 'India' },
  iec:          { type: String },
  shipFrequency:{ type: String },
  // Common
  consent:      { type: Boolean, default: false },
  status:       { type: String, enum: ['new', 'contacted', 'converted'], default: 'new' },
  createdAt:    { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);
