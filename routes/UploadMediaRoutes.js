// ab hamne new route bana lya code zayada hogya tha usme
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

const jwt = require('jsonwebtoken');


require('dotenv').config();

const bcrypt = require('bcrypt');


router.post('/setprofilepic', (req, res) => {
    // sab se pehle ap email or profilepic provide krogge

    const { email, profilepic } = req.body;
    console.log("email", email);
    console.log("set image route seprofilepic", profilepic);
    // if (!email || !profilepic) {
    //     return res.status(422).json({ error: "Please provide email and profile picture" });
    // }

    // aor ab email ko find krenge 
    User.findOne({ email: email })
        .then(async savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" })
            }
            savedUser.profilepic = profilepic;
            savedUser.save()
                .then(user => {
                    res.json({ message: "Profile Picture Updated Successfully" });
                })
                .catch(err => {
                    return res.status(422).json({ error: "Server Error" });
                })
        })
        .catch(err => {
            console.log(err);
        })
})
 



module.exports = router;
