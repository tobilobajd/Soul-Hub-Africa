// backend/routes/index.js
const express = require('express');
const router = express.Router();
const sendMail = require('../utils/sendMail'); // ✅ Make sure this path is correct

// Contact form submission route
router.post('/api/contact', async (req, res) => {
	const { name, email, message } = req.body;

	// Validate input
	if (!name || !email || !message) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	try {
		// Send email
		await sendMail({ name, email, message });
		return res
			.status(200)
			.json({ message: 'Your message was sent successfully!' });
	} catch (err) {
		console.error('❌ Email failed:', err);
		return res
			.status(500)
			.json({ message: 'Failed to send message. Try again later.' });
	}
});

module.exports = router;
