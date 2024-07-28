const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  let mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
