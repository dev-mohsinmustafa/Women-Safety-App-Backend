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
const accountSid = process.env.Twilio_Account_Sid;
const authToken = process.env.Twilio_Auth_Token;

const client = twilio(accountSid, authToken);




app.use(express.json());

// app.post('/sendDistressSignalShake', async (req, res) => {
//   try {
//     // Get the emergency contacts from the database or any other source
//     const emergencyContacts = [
//       { name: 'Emergency Contact 1', phoneNumber: '111-111-1111' },
//       { name: 'Emergency Contact 2', phoneNumber: '222-222-2222' },
//       // Add more emergency contacts as needed
//     ];

//     // Send the distress signal using Twilio
//     emergencyContacts.forEach((contact) => {
//       const message = `Distress signal from SOS app. User needs immediate assistance. Location: Latitude: XX.XXXXX, Longitude: YY.YYYYY.`;
//       client.messages
//         .create({
//           body: message,
//           to: contact.phoneNumber,
//           from: twilioPhoneNumber,
//         })
//         .then((message) => console.log(`SMS sent to ${contact.phoneNumber}: ${message.sid}`))
//         .catch((error) => console.error('Error sending SMS: ', error));
//     });

//     res.status(200).json({ message: 'Distress signal sent to emergency contacts.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to send distress signal.' });
//   }
// });



router.post('/sendDistressSignalShake', async (req, res) => {
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
