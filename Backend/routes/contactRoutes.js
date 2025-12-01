const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', 
    port: 587,                   
    secure: false,                  
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body; 

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER, 
            to: 'Samohalifescience@gmail.com', 
            replyTo: email, 
            subject: `New Inquiry: ${subject}`,
            html: `
                <h3>Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr>
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        res.status(200).json({ message: 'Inquiry sent successfully!' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ message: 'Failed to send inquiry. Check API logs.' });
    }
});

module.exports = router;