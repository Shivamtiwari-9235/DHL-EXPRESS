const express = require('express');
const router = express.Router();
const { createLead, getAllLeads, updateLeadStatus } = require('../controllers/leadController');

router.post('/', createLead);
router.get('/', getAllLeads);
router.patch('/:id', updateLeadStatus);

module.exports = router;
