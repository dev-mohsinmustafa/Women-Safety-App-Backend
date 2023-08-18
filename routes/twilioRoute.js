// ab hamne new route bana lya code zayada hogya tha usme
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Message = mongoose.model('Message');

const jwt = require('jsonwebtoken');


require('dotenv').config();

const twilio = require('twilio');

// Replace these values with your Twilio credentials
// const accountSid = 'AC77a2f31bd1b657b1666eac01fe8af3ef';
// const authToken = 'd696df1d56a0bf1501e94ca6a6339374';
// const twilioPhoneNumber = '+17692103456';
const accountSid = process.env.Twilio_Account_Sid;
const authToken = process.env.Twilio_Auth_Token;
// const twilioPhoneNumber = process.env.Twilio_Phone_Number;

const client = twilio(accountSid, authToken);



router.post('/sendDistressSignal', async (req, res) => {
  const { to, from, body } = req.body;

  try {
    const message = await client.messages.create({
      body,
      to,
      from,
    });

    console.log(message.sid);
    res.send({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Error sending the message.' });
  }
});





module.exports = router;
