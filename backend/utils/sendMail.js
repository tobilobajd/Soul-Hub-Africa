const nodemailer = require('nodemailer');

const sendMail = async ({ name, email, message }) => {
	// Setup your mail account (use Gmail, Outlook, or SMTP service)
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'yourgmail@gmail.com', // ✅ Replace with your email
			pass: 'your-app-password', // ✅ Use an app password (not your real password)
		},
	});

	const mailOptions = {
		from: `"SoulHub Contact" <yourgmail@gmail.com>`,
		to: 'yourgmail@gmail.com', // ✅ Replace with where you want to receive messages
		subject: 'New Contact Message',
		html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
	};

	await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
