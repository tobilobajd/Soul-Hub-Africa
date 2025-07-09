const express = require('express');
const router = express.Router();

// Newsletter subscription route
router.post('/api/subscribe', (req, res) => {
	const { email } = req.body;

	if (!email || !email.includes('@')) {
		return res.status(400).json({ message: 'Invalid email.' });
	}

	// You can later save to database or send a notification
	console.log(`✅ New subscriber: ${email}`);

	return res.status(200).json({ message: 'Thank you for subscribing!' });
});

module.exports = router;
