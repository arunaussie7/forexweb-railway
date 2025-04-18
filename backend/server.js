const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'algoactive@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Custom bot request endpoint
app.post('/api/custom-bot', async (req, res) => {
  const { name, email, mobile, strategy } = req.body;

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'algoactive@gmail.com',
      subject: `New Custom Bot Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Trading Strategy:
${strategy}
      `,
      html: `
<h3>New Custom Bot Request</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mobile:</strong> ${mobile}</p>
<p><strong>Trading Strategy:</strong></p>
<p style="white-space: pre-wrap;">${strategy}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 