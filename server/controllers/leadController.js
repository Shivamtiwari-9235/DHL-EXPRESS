const Lead = require('../models/Lead');

const createLead = async (req, res) => {
  try {
    const {
      shippingType, firstName, lastName, phone, email,
      companyName, address, postalCode, city, country,
      iec, shipFrequency, consent,
    } = req.body;

    const errors = [];
    if (!shippingType) errors.push('Please select how you would like to ship with DHL');
    if (!firstName?.trim()) errors.push('First Name is required');
    if (!lastName?.trim()) errors.push('Last Name is required');
    if (!phone) errors.push('Mobile Phone Number is required');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Enter a valid email address');

    if (shippingType === 'regular') {
      if (!companyName?.trim()) errors.push('Company Name is required');
      if (!address?.trim()) errors.push('Address is required');
      if (!postalCode?.trim()) errors.push('Postal Code is required');
      if (!city?.trim()) errors.push('City is required');
    } else if (shippingType === 'one-time') {
      if (!postalCode?.trim()) errors.push('Postal Code is required');
    }

    if (errors.length > 0) return res.status(422).json({ success: false, errors });

    const lead = new Lead({
      shippingType, firstName: firstName.trim(), lastName: lastName.trim(),
      phone, email: email.toLowerCase(),
      companyName, address, postalCode, city,
      country: country || 'India',
      iec, shipFrequency,
      consent: consent || false,
    });

    await lead.save();
    return res.status(201).json({
      success: true,
      message: 'Thank you! A DHL representative will call you within 4 working hours.',
    });
  } catch (error) {
    console.error('createLead error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

const getAllLeads = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.ADMIN_API_KEY)
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    const leads = await Lead.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: leads.length, leads });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updateLeadStatus = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.ADMIN_API_KEY)
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    const { status } = req.body;
    if (!['new', 'contacted', 'converted'].includes(status))
      return res.status(400).json({ success: false, message: 'Invalid status' });
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    return res.status(200).json({ success: true, lead });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { createLead, getAllLeads, updateLeadStatus };
