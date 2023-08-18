const nodemailer = require("nodemailer");



// day-5 video 
// Nodemailer
const transporter = nodemailer.createTransport({
    // yah pe enho ne bola he host kon rahega
    host: "smtp.gmail.com",
    port: 465,
    requireTLS: true,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.NodeMailer_email,
        //   jis email ke ap baat kr rhy ho uska app password dene hai yaha
        // yaha app password dalna hai
        pass: process.env.NodeMailer_password
        //   es password se me verify hogya hun ab me kise ko be password bhej skta hun
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function SendMail(receiveremail, code) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'mtechsolutionshub@gmail.com', // sender address

        // ab mujhe bolna hai ke jis ne be signup krna hai uska email yaha pochna do or usko verification code be 
        // ponch jaye to uper receiveremail or code
        // to us chez ko krne ke leye ham ese likhen ge ab or same he neche kiya html me
        to: `${receiveremail}`, // list of receivers
        // to: "devmohsinmustafa@gmail.com", // list of receivers
        subject: "Signup Verification", // Subject line
        text: `Your Verification Code is ${code}`, // plain text body
        html: `<b>Your Verification Code is ${code}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}
module.exports = SendMail;
//