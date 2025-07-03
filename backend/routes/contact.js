const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const MESSAGES_FILE = path.join(__dirname, '..', 'messages.json');

router.post('/', (req, res) => {
	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ error: 'All fields are required.' });
	}

	const newMessage = {
		name,
		email,
		message,
		timestamp: new Date().toISOString(),
	};

	// Read existing messages
	const messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
	messages.push(newMessage);

	// Save back
	fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

	res.json({ success: true, message: 'Message received successfully.' });
});

module.exports = router;
