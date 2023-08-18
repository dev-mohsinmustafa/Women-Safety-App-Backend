// const express = require('express');;
// const router = express.Router();
// //  ab ese database ke sath connect krna hai to usy me import kren
// const mongoose = require('mongoose');

// //   or jo hamne User model banaya usko be import krna hai
// const User = mongoose.model('User');

// //  es ke bad jwt ko open krna hai
// // jwt kya krega ke jab be ye apka succesfull hoga to ye token create kr de ga 
// // is token ko ap hamary website ko accces krne ke leye use kr skty hai
// // ye token bot kam krega es ko ham agy discuss krenge
// const jwt = require('jsonwebtoken');


// // es ke bad 1 chez or jo ham env file use kr rhy hai usko be require krna hai

// require('dotenv').config();



// router.post('/signup', (req, res) => {
//     res.json("This is signup")
//     console.log('sent by client', req.body)
//     // console.log("This is signup page route");
//     // res.send(req.body)


//     // ab ham authRoutes me aye or btayen ge ke users ne jo be data dala hai us ko hamy pele btana prega 
//     // yani decode krna prega 
//     // basically restructured krna hai us data ko ke kya kya ham ne dala howa hai jese
//     const { name, email, password, dob } = req.body;

//     //  ab is me se koi be chez agr khali re jaye ge to hamy barrier lagany prenge yani conditions 

//     // yaha pe me bolonga ke agr email khaili password khali hai name khali hai dob khali hai to return krwa do
//     if (!name || email || password || dob) {
//         // return  console.log("Please fill form")
//         // to return krwa do
//         // yani hamne status response me bhej dya agr data nai araha hai to
//         res.status(422).json({ error: "Please fill all the fields" })
//         // yaha pe mene bola ke user ke side se masla hai hamari trf se sai hai
//         //Please fill all the fields to yehe error hamapny frontend me get kr lenge or error dekha denge 
//     }
//     // yaha pe mujhe likhna hai ke agr sab khush sahi hai to
//     // yaha pe ham likhdenge ke agr apka email pehle se exist krta hai ya nai to ye check krna hai
//     // hamne ke deya hai ke hamry DATABASE me wo name bhejo jo user ne enter kiya hai 
//     // mtlb jab ap sigup krwa rhy honge to yehe bologe na ke email pehle se exist krta hai ya nai 
//     User.findOne({ email: email })


//         // aor yaha pe ham check krne ke leye phle bhejen ge ke 
//         // aggr isko pata chl jata hai ke hai ke nai to dono then me aye ge mtlb agr email exist krta hai to be aye
//         // nai krta to be aye ga
//         // to hamne bola ke 1 variable ke ander ye store kr lo
//         .then(async (savedUser) => {
//             // agr email exist krta hai 
//             // mtlb agr mene mohsinmustafaansari@gmail.com pehle se he register kr ke rkha hai 
//             // or ab me phr 2sri bar register krne ke kosish kr raha hun to mujhe error kya aye wo if me 
//             if (savedUser) {
//                 return res.status(422).json({ error: "Invalid Credentials" });
//                 // return res.status(422).send({ error: "User already exists" });
//                 // es me hamne ese ne bolna ke email already exists to es se Hackers ko pata chl jaye ga
//                 // ke email pehle se he exists krta hai to wo password pata kr lega es ke bajaye 
//                 // ap Invalid Credentials likh do wo behter rhega es se pata he ne chlega ke usne sai
//                 // email password dala hai ya nai pata he ne chlna 
//                 // Invalid Credentials iska mtlb ke pehle se exist krta hai ya nai
//             }
//             // es ke ham yaha pe 1 constant be bana skty hain ke agr email sai nai nikla to saveduser ke ander
//             // kush nahi ayega ye condition he run ne hoe uper wali ab hamne neche kahenge ke
//             // es ko ap else me be likh skty thy
//             // agr usko email nai mila to me DATABASE me kya bhejna chahta hun 
//             // name , email, password, or date of birth jo hmne user se liya hai

//             const user = new User({
//                 name,
//                 email,
//                 password,
//                 dob
//             })
//             // or ab iske bad mujhe ese SAVE krwana hai  
//             // to save krwany ke leye ham try catch laga skty hain
//             try {
//                 // try me mene boldeya ke try kro await or
//                 // user ko hamri database me save krwa do uske save ka method hai /function hai
//                 // es ke jo be hamne user ka data dala howa hai wo hamari DATABASE me save hojaye ga
//                 await user.save();
//                 // or es ke bad ham likhe denge ke user saved successfully uske leye catch banana prega
// res.status({message: "User Saved Successfully"})

// ab hame jwt_secret generate krna parega
// mtlb 1 token generate krna hai jese he apka user ban jaye to kuch response me ap send kr skty hain
// to yaha mene 1 token generate kr leya
// token kis ko assign krna hai ke jo be apne user create kiya hai uski id ko {_id: user._id} ese us ke bad comma, de bola ke 
// uski secret key be bta do  ,process.env.JWT_SECRET ese
// aor ab ham response me send kr den ge ke   res.send({token}); ye hamara FRONTEND me jaye ga
// hamne bola ke jese he apka user ka data save hoga to 1 token generate hoga or wo hamy FRONTEND me mil jaye ga
// agr ye token exist krta hai to ham esko VALID krwa denge abhi ham sirf es ko bhej rhy hai 
// token basically verify krne ke leye hota hai es ko ham next video me  verify krenge or esko FRONTEND se connect krenge
// const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
// res.send({ token });







// DAY # 3 Video 
// kal ke video me hamne token banaye tha ham es ka krenge kya 
// aj ki video me ham es TOKEN 

// TOKEN KESE GENERATE HOGA 
// pehle to user ki id se compare krenge  e.g:  { _id: user._id },  
// mtlb me yaha generate hone ki baat kr raha hun comparsion ki baat ne kr raha 
// me bologa ke esa TOKEN banaao ke jo us USER ki id ke leye Valid ho e.g:  { _id: user._id },   + usme 1 secret key be jur jaye e.g: process.env.JWT_SECRET

// ye hamar SIGNUP wala TOKEN hogya hai ab hamey SIGNIN wala banana hai 
// signin wala banane ke leye hamy 1 MIDDLEWARE banaan prega 
// to me 1 MIDDLEWARE Ka folder bana leta hu









//             }
//             catch (err) {
//                 console.log('db err', err);
//                 // or yaha pe ham error dekha denge ya console log be dekha skty
//                 return res.status(422).json({})

//             }

//         }
//         )

// })



// module.exports = router;













const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');


const jwt = require('jsonwebtoken');



require('dotenv').config();

const bcrypt = require('bcrypt');
const SendMail = require('../utils/SendMail');


// const nodemailer = require("nodemailer");



// // day-5 video 
// // Nodemailer
// const transporter = nodemailer.createTransport({
//     // yah pe enho ne bola he host kon rahega
//     host: "smtp.gmail.com",
//     port: 465,
//     requireTLS: true,
//     secure: true,
//     auth: {
//         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//         user: process.env.NodeMailer_email,
//         //   jis email ke ap baat kr rhy ho uska app password dene hai yaha
//         // yaha app password dalna hai
//         pass: process.env.NodeMailer_password
//         //   es password se me verify hogya hun ab me kise ko be password bhej skta hun
//     }
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function mailer(receiveremail, code) {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//         from: 'mtechsolutionshub@gmail.com', // sender address

//         // ab mujhe bolna hai ke jis ne be signup krna hai uska email yaha pochna do or usko verification code be 
//         // ponch jaye to uper receiveremail or code
//         // to us chez ko krne ke leye ham ese likhen ge ab or same he neche kiya html me
//         to: `${receiveremail}`, // list of receivers
//         // to: "devmohsinmustafa@gmail.com", // list of receivers
//         subject: "Signup Verification", // Subject line
//         text: `Your Verification Code is ${code}`, // plain text body
//         html: `<b>Your Verification Code is ${code}</b>`, // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     //
//     // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//     //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//     //       <https://github.com/forwardemail/preview-email>
//     //
// }

// //










// day-6 video
router.post('/signup', async (req, res) => {
    // res.send("This is signup")
    // console.log('sent by client', req.body)
    const { fullName, email, password } = req.body;
    //ab hamy pata hai ke data blank ne hoskta to es code ko remove kr denge neche hamne condition laga de hai
    // verify route me es ko ab ne krege br br check ne krenge 
    // if (!fullName || !email || !password) {
    //     return res.status(422).send({ error: "Please fill all the fields" })
    // }


    // or hamy pata hai ke email pehle se exists nai krta tbhi to ham verify kr rhy thy to ese be bar bar 
    // ne check krwana es ko be comment kr den
    // User.findOne({ email: email })
    //     .then(async (savedUser) => {
    //         if (savedUser) {
    //             return res.status(422).send({ error: "Invalid Credentials" });
    //         }


    // es ke bad ham bol rhy hai ke user ki details hai wo set kiya hai
    const user = new User({
        fullName,
        email,
        password,
        // dob
    })

    try {
        // or yaha jses he user save hoga hamne token generate kiya or bhej deya or response me token bhej deya
        // es ko ham ab check kr lete hai me ab frontend me chla gya or ese fetch krty hain signup es route ko
        await user.save();
        //  res.status({message: "User Saved Successfully"})
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ message: "User Registered Successfully", token });
    }
    catch (err) {
        console.log('db err', err);
        return res.status(422).send({ error: err.message })

    }

    // }
    // )
})


// day-6 video end
// 





// ab mailer function ko call be krna hai to uske leye me yaha temporary 1 new route bana longa
router.post('/verify', (req, res) => {


    // signup code copy kiya hai
    console.log('sent by client', req.body)
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(422).send({ error: "Please fill all the fields" })
    }


    // agr email pechle se he register krta hai
    User.findOne({ email: email })
        .then(async (savedUser) => {
            if (savedUser) {
                console.log("Invalid Credentials");
                return res.status(422).json({ error: "Invalid Credentials" });
            }

            try {





                // ab isme ham apna verification code likh skty hain or 262 me commit krdenge
                let VerificationCode = Math.floor(100000 + Math.random() * 900000);
                console.log(VerificationCode);



                // 285 number line ke bad ka code
                // user ka variable
                let user = [
                    {
                        fullName,
                        email,
                        password,
                        // or 1 important chez VerificationCode bhej rhy hain
                        VerificationCode
                    }
                ]




                // ab hamne email bhejna hai to simple ap jo saveduser ka email nikal to us mehe to bhjena to
                // simple email likh denge

                // ab jese he verification code send hogya hai to ap await laga do
                await SendMail(email, VerificationCode)

                // or ab me response me 1 message send kr raha hu or user ka data be response me send kr raha hu
                // user ka data is leye send kr raha hu kyo ke agy hamy verification code lena be hai
                // ham ne abhi bheja hai or hamy ese lena be hai next page me wo be apko batao ga
                // ab ap likhdo ke ham message kya bhj rhy hai
                // or ese he hamne user ka data be bhej deya 
                // wo kis me aye ga wo 1 user name ke variable me aye ga ab ap bologe ke user name ka variable to apne banaya 
                // he nai hai to usy be bana lenge

                // res.send("Verification Code Sent");
                res.send({ message: "Verification Code Sent to your Email", userdata: user });

                // yani next page be verication code or data ko redirect kr denge
                //man lo code tha 1234 to hamne email me code 1234 or yehe next page me for comparison bhej denge
                // agr dono match kr gye to hamara user verified hai

                console.log("Verification Code Sent");


            } catch (error) {
                console.log(error);
            }

        }
        )








    // yaha pe mailer ko bs call krden
    // mailer("devmohsinmustafa@gmail.com", "1440");
    // hamne ab email or code ko ese ne banana hame random code bhejna hai 
    // ab ham code generate krenge
    // code generate krne ke leye 1 simple step hai jo ap ko follow krna hai 
    // yani agr apko 6 digit ka krna hai to
    // ap es ko google se copy be kr skty hai 
    // How to generate a 6 digit random number in javascript


    // Generate a random number between 100000 and 999999
    // let VerificationCode = Math.floor(100000 + Math.random() * 900000);
    // console.log(VerificationCode);


    // mailer("devmohsinmustafa@gmail.com", VerificationCode)


    // res.send("Verification Code Sent");
    // console.log("Verification Code Sent");
    // ab mujhe bolna hai ke jis ne be signup krna hai uska email yaha pochna do or usko verification code be 
    // ponch jaye to uper receiveremail or code

    //  ab ham dunia me har kise ko email bhejna chhaty hai to uske leye ham neche waly signup route se kuch code
    // copy kr lenge 
})



// router.post('/signup', (req, res) => {
//     // res.send("This is signup")
//     console.log('sent by client', req.body)
//     const { fullName, email, password } = req.body;
//     if (!fullName || !email || !password) {
//         return res.status(422).send({ error: "Please fill all the fields" })
//     }
//     User.findOne({ email: email })
//         .then(async (savedUser) => {
//             if (savedUser) {
//                 return res.status(422).send({ error: "Invalid Credentials" });
//             }

//             const user = new User({
//                 fullName,
//                 email,
//                 password,
//                 // dob
//             })

//             try {
//                 await user.save();
//                 //  res.status({message: "User Saved Successfully"})
//                 const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
//                 res.send({ token });
//             }
//             catch (err) {
//                 console.log('db err', err);
//                 return res.status(422).send({ error: err.message })

//             }

//         }
//         )
// })



// day 3 Video
// apka login wala jo route hoga wo be post request le ga

router.post('/signin', async (req, res) => {
    // res.send(req.body)
    console.log(req.body)

    const { email, password } = req.body;
    // ye email or password mil gya 
    // ab ham check krenge ke email or password hamari database me exists krta hai jo password hai wo check krenge ke match krta hai ke nai
    // jo password bheja gya hai usko ham bcrypt compare krty hai normally compare nai ho ga kyo wo ab hash ho chuka yani key ban chuki hai

    // sab se pehle ham bolenge ke agr email password exist nai krta yani agr user ne email ya password nai likha
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    // agr email password sai hai to 

    // ab ham bolenge ke user exist krta hai ke nai 
    const savedUser = await User.findOne({ email: email });
    //  User.findOne({email: email}) eska matlb ke hamne jo uper email bheja us apni database me check krnege ke exists krta ke nai

    // agr nahi krta hai to 
    if (!savedUser) {
        return res.status(422).json({ error: "Invalid Credentials" });
    }


    // ab agr sab khush sai hai to 
    // ab ham email or password ko compare krenge 



    // savedUser.password ye jo database se user ki detail nkali hai uska password 
    // const savedUser = await User.findOne({email: email}); ye wala


    // bcrypt.compare(password, savedUser.password, (err, result)=>{
    // esme password ka matlab hai ke jo simple wala password hai Mohsin1122@@ usko compare kro jo hash password hai jo hamarai database
    // me save horaha hai




    // (err, result) or usko mene es format me likh deya hai ke agr err aye to be show ho or jo result aye wo be show hoga

    try {
        bcrypt.compare(password, savedUser.password, (err, result) => {


            if (err) {
                console.log(err);
                return res.status(500).send({ error: "Server Error" });
            }


            // es ke baad me bolonga ke agr apko result mil jata hai to 

            // agr result milta hai to ye kro
            if (result) {

                // yaha pe ham print krwa denge 
                console.log("Password matched");
                // uske iska Token generate kr denge or browser me save kr lenge
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);

                // new  add kiya agr frontend me data bhejna hai
                const { _id, fullName, email, password } = savedUser;

                res.send({ message: "Successfully Signed In", token, user: { _id, fullName, email, password } });
            }
            // agr error ata hai to ye dekhao 
            else {
                console.log("Password does not match");
                return res.status(422).send({ error: "Invalid Credentials" })
            }
        });
    } catch (err) {
        console.log(err);
    }

})





























// day-7 video
// Forgot Password route
// forgot password me sab se pehle ap user se 1 email mangty ho 
// pehle ham check krenge ke user ka email database me exists krta he ke nai 
// agr krta hai tb he agy barho nai to error dekha do 
// verify wale route me hamne bola tha ke agr nai ktta tb agy barho kyo wha ham signup ke leye verify kr rhy thy
// or ab ham forgot password ke leye verify krenge 
// to bs verify wla route copy krna hai or uska ulta procedure krna hai 

router.post('/verifyForgotPassword', (req, res) => {
    console.log('sent by client', req.body)
    const { email } = req.body;
    if (!email) {
        return res.status(422).send({ error: "Please fill all the fields" })
    }
    // agr email pechle se he register krta hai
    User.findOne({ email: email })
        .then(async (savedUser) => {
            if (savedUser) {
                // yaha pe mene bola agr user exists krta hai to us email se tb he usko verification code bhjo
                // forgot password ke leye agr nai krta to invalid crendentials show krwa do

                try {
                    // ab isme ham apna verification code likh skty hain or 262 me commit krdenge
                    let VerificationCode = Math.floor(100000 + Math.random() * 900000);
                    console.log(VerificationCode);

                    // ab jese he verification code send hogya hai to ap await laga do
                    await SendMail(email, VerificationCode)

                    // res.send("Verification Code Sent");
                    res.send({ message: "Verification Code Sent to your Email", VerificationCode, email });

                    console.log("Verification Code Sent");

                } catch (error) {
                    console.log(error);
                }
            }
            else {
                console.log("Invalid Credentials");
                return res.status(422).json({ error: "Invalid Credentials" });
            }

        }
        )

})

// day-7 video end





// ab hamara forgot password wala route bangya hai ab ham change password krwane waly hai to uske 
// 1 route banana hai resetpassword ke name se 

router.post('/resetPassword', (req, res) => {
    // ab yaha hamen kya kya chexen chahye 
    // yaha sirf resetPassword ke leye hamy bs email chahye or password bs username ne chahye yaha pe ham bs 
    // email or password mangenge bs

    // uper wale route me jab apne code sai dal diya to ab ham bs is route me 1 email bhej denge or 1 password 
    // jo new password ap set krna chahty ho to me yaha bolonga ke es email me 1 new password set kr do

    const { email, password } = req.body;

    // yaha pe hamy reset krwana hai to me yaha check kr leta hu

    if (!email || !password) {
        return res.status(422).json({ error: "Please add all the fields" });

    }
    // eske ham kahenge ke jo be email usne bheja hai usko ap pele check kr lo ke wo hamry database me hai ke nai
    // wese hamne uper check kr leya tha lekin chlen phr kr lete hai double security ke leye 
    // ye important be hai kyo ke ham pele user ka data nikalenge or phr usko update krwana hai na


    else {
        User.findOne({ email: email })
            // hamne bola ke user ka data do or phr us me password ko bs change krwana hai
            .then(async (savedUser) => {
                // ham ne bola ke agr us saved email ka user exists krta hai to hamne bolenge ke saveduser.password 
                // kyo ke hamne password change krna hai
                // uska password change krna hai jo hamari database me saved hai or kis se change krna hai jo uper password
                // likha hai !password ye wala yani jo user provide kr raha hai  yani ham ese new password se exchange kr rhy

                // savedUser.password ye database me store wala password hai or = password ye wala new password hai
                if (savedUser) {
                    savedUser.password = password;
                    //  ab password to dal diya new lekin ese save be krwana hai to 
                    savedUser.save()
                        // ab ap yaha bolo ke duplicate ne hoga ke apne phr se save kr dia 
                        // esa to nai hai ke 2 bar save ho jaye ga password pele kise or user ke leye or ab kise or keleye
                        // email same hai lekin different {} ban jate to yaha esa nai hoga kyo ke ID to 1 he ha na 

                        // or ab idr ap try catch,await, then catch sab kuch laga skty apki marzi
                        .then(user => {
                            res.json({ message: "Password Changed Successfully" });
                            // or agr password saved nai howa to catch
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
                // or agr iske ilawa agr koi dikat hai to ham else laga dety hai
                else {
                    // hamne bola he kr agr saved user exist krta hai to changing kro nai to invalid credentials 
                    // mtlb user ne agr email likhe to wo hamari database me exists he nai to koi update ne krnege 
                    return res.status(422).json({ error: "Invalid Credentials" });

                }
            })
    }

})


// 




// Userdata

// router.post('/otheruserdata', (req, res) => {
//     const { email } = req.body;
//     User.findOne({ email: email })
//         .then(savedUser => {
//             if (!savedUser) {
//                 return res.status(422).json({ error: "Invalid Credentials" });
//             } else {
//                 console.log(savedUser);
//                 res.status(202).json({ message: "User found", user: savedUser });

//             }
//         })

// })


// Userdata
// ye route ab mene as a middleware AuthTokenRequired.js bana liya hai or ese server me call kr lya
router.post('/userdata', (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Invalid Credentials, You must be logged in, token not given" })
    }
    const token = authorization.replace("Bearer ", "");
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "Invalid Credentials, You must be logged in, token invalid" })
        }
        const { _id } = payload;
        User.findById(_id)
            .then((userdata) => {
                res.status(200).send({ message: "User found", user: userdata })
            })
    })
})






// aj ham ye kam krenge 
// kal ham sirf email ke through data le rahy thy user ka 
// lekin ye sai ne hai 
// agr me hacker hun to me kise ka be data mangwa skta hun 
// yani me sirf us ka email longa or data ajaye ga to is se bachne ke leye ham aj TOKEN lagayenge
// abhi ke leye ham uper wale code ko comment krdete hai nai to me yaha otheruserdata likh deta hu
// kyo ke hamm kise or user ka nikalne waly hai data tb ham kam chezen nikalty hai to us kelye ye better rhega
// lekin abhi ham khud ka niklana chahty to ham sirf khud ka TOKEN provide krenge to me 1 route banaoga



// router.post('/userdata', (req, res) => {
//     // to yaha jo req hai us ke header me hamm 1 TOKEN bhejen ge to token us user ka unique rehne wala hai
//     //jab user loginin rhenga tb he token ka access rhega jab logout hoga to nai rhega or TOKEN badlta rhta hai
//     // email se to esa he jab me email dalonga to mujhe data milega lekin TOKEN me esa he ke 1 bar token gya to new
//     // token se he data milega to HACKER kabbi hack ne kr paye ga to ye TOKEN bohat important hai 
//     // ye token aye ga kaha se ke jab user register krega tb ham 1 token bhej rhy thy waha se ayega ye TOKEN 
//     // to usi TOKEN ko ham yaha use krenge 
//     // or user ka data nikalenge


//     // to me bolonga ke headers me se authorization wali field se token nikal do 
//     // or wo token me frontend se provide kronga abhi keleye ham postman me test krty pele
//     // ess ka 1 middleware be bana skty hai lekin abhi ke leye ham nai bana rahe 
//     // kyo ke kabhi kabhi esa be hosta hai ke ham TOKEN ke through pora userdata nai bhej rahy 

//     // yaha me userdata bhejna chahata hun es leye me specifiy likh raha middleware nai bana raha 
//     const { authorization } = req.headers;

//     // or me bol raha ke apka authorization field kesa hoga wo kuch esa hoga

//     // authorization = "Bearer nciojiojweiojeoj"
//     // to me bolonga ke jo mere string arahe hai authorization ke ander us me se Bearer ko erase kr do 
//     // to ye mene hint diya hai smjhne keleye // authorization = "Bearer nciojiojweiojeoj" 

//     // to pele me bolonga ke agr authorization he he nahi to mtlb authorization ke ander kuch hai he nahi mtbl 
//     // blank hai khali hai to ham error bbhej denge to ham usko Login wale page me route krwa denge 
//     // ap user ka data ne leke skty jab tk wo token ne de ga

//     //mtlb agr user ne token nai dya to ye wala error yani us ne kuch fill he nai kya 
//     if (!authorization) {
//         return res.status(401).json({ error: "Invalid Credentials, You must be logged in, token not given" })
//     }



//     // or agr token hai lekin galat hai incorrect hai to tb kuch or dekhana chahty hai ham
//     //to yaha pe pele ham token generate kr len
//     // jo hamara authorization hai us me se token abstract kr lenge 

//     // .replace ye thori se javascript wali technique lagane prege 
//     // bearer ko replace kr do blank "" se 

//     // ye javascript ka 1 concept hai ke 1 string ko 2sri string se replace krwane ke leye 
//     const token = authorization.replace("Bearer ", "");
//     //uske bad ap print krwa ke dkh skty
//     console.log(token);


//     // uske bad me bolonga ke agr ap VERIFY krna chahty apko verify krna prega na token 
//     // man lo ham ne kuch apne se bhej dya // authorization = "Bearer nciojiojweiojeoj"
//     // to hacker esa kuch be bhej skta hai to apko kese pata chlega ke ye geniune TOKEN hai ke nai
//     // to uske leye jwt ka concept hota hai hamary pass
//     // apko ye syntax likhna hai

//     //yaha jo hamne token wala variable banaya wo likhna yani bhej deya verify kr lya or 2 chezen or krni hai
//     // provide krne yani comparison kis se hone wla hai 
//     // 1 to wo jo apne JWT_SECRET bheja hai jis se apka TOKEN bana hai  wo likhna
//     // 2 ham bol skty agr nai matched krta hai to error me ajaye ga nai to 1 payload name ka variable bana lo

//     // to hamne bola ke secret key jo be hai us se token ko compare krenge like is token ke ander kya kya hoskta hai
//     // user ka data hoskta hai + secret key ho skti hai 
//     // userdata mtlb uski id ho skti hai jo ham token generate kr rahy thy signin wale route me 
//     // hmne waha user ki _id or secret key provide ke the to in do ke zariye 1 TOKEN ban raha tha 


//     // to hamne bola ke jo secret key wala key hai es ke ander to wo payload ke ander aye ga
//     // agr nai hai to err me ajaye ga to es leye err, payload likha


//     jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {

//         // es ke hamne kya krna hai ke agr error ata hai to mtlb apka TOKEN sai ne hai
//         // apne galt TOKEN provide kiya hai like kise user ne apne se token likh diya hai or backend me bhej dya
//         // hai to agr galt token hai to error show krwa do Invalid
//         // yani user ne token to diya lekin galt de deya 
//         if (err) {
//             return res.status(401).json({ error: "Invalid Credentials, You must be logged in, token invalid" })
//         }

//         // es ke ilawa jo be aye ga ham usko extract kr lenge 
//         // to hame jo be payload milne wala hai to usme se ham _id ko extract kr lenge 
//         // to payload ko ap print krwa skty ho kuch esa data form me ata hai jis se ap id extract kr skty ho

//         // to yaha bolenge ke jo be payload araha hai us me se ap id extract kr lo 
//         // to us se kya hoga ke ham user ki id nikal rahy hai token me se 
//         // const { _id, fullName, email, password } = savedUser;  ye wale jo signin se bheje se hai


//         // to basically ye hamara payload hai pora
//         // const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET); ye wala
//         // or esko apko assign kr deya const token me 
//         //  token me usne bola ke secret key hai to apka TOKEN sai hai  to ab yaha ham us user ki id le rahy hai

//         const { _id } = payload;
//         // ham ese print be kr skty
//         // console.log("user hassanmustafa@gmail.com id is", _id);


//         // ab hamne likhna hai jo hamara user wala model hai us me se id get kr do
//         // pele ham findByemail kr rahy thy to ye findById wala bohat secure hai 
//         // to es se kya hoga ke agr ham galat TOKEN dete hai to data nai nikle ga 
//         // pele to ham bs email se data sara le rhy thy to email se data nikalna bohat asan lekin ab TOKEN se 
//         // nikalna hai to ye bohat diffcult hai 
//         // to es leye ye ROUTE use kiya userdata nikalne ke leye  
//         User.findById(_id)
//             //to agr es id ke through agr data milta to nikal do hamy
//             // or 1 chez or bhej skty message 

//             .then((userdata) => {
//                 res.status(200).json({ message: "User found succesfull", user: userdata })
//             })

//     })




// })



// Change Password frontend

// change me ham 3chezen bolenge oldpassword newpassword or us user ka email ya id ham mangwa lenge 

router.post('/changePassword', (req, res) => {

    const { oldPassword, newPassword, email } = req.body;

    if (!oldPassword || !newPassword || !email) {
        return res.status(422).json({ error: "Please provide all the fields" })
    } else {
        User.findOne({ email: email })
            .then(async savedUser => {
                if (savedUser) {
                    bcrypt.compare(oldPassword, savedUser.password)
                        .then(doMatch => {
                            if (doMatch) {
                                // agr dono ki value same hai to ham 1 newpassword save krwa denge 
                                savedUser.password = newPassword;
                                savedUser.save()
                                    .then(user => {
                                        res.json({ message: "Password Changed Successfully" })
                                    })
                                    .catch(err => {
                                        // console.log(err);
                                        return res.status(422).json({ error: "Server Error" })

                                    })
                            }
                            else {
                                return res.status(422).json({ error: "Invalid Credentials" })
                            }
                        })

                }
                else {
                    return res.status(422).json({ error: "Invalid Credentials" })
                }
            })

    }

})




// update user data / change username frontend

//an body me ham sirf 2 chezen he bheje ge username or email  || or username ke jagha mene apni
// coding me fullName likha to me ye use kronga 
// username or email bhejne se bs apka kam ban jaye ga

router.post('/setusername', (req, res) => {

    // ham body me se fullName or email extract kr lenge
    // mtlb jis be fullName ko ham change krna chahty hai ya jis be email ke leye ham username || fullName
    // change krna chahty hai 
    // to us ke yaha new fullName provide kr den ge  
    // man lo me username 123 rkhna chahta hun to wo fullName me aye yaha neche wale code ka ye mtlb hai
    // or jis bndy ne try kya hai change krne ka uska email email me ajye ga 

    const { fullName, email } = req.body;

    // ab ham yaha bolenge ke ye agr empty hai to eror de 
    if (!fullName || !email) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
    else {
        // agr us ne sab kuch dala hai to ye code 

        // VERY IMPORTANT POINT 
        // user.find ke ander ham bolenge ke pele fullName do 
        // hamne bola ke check kro ke wo username available hai ke nai mtlb mohsin1122 pele se kise ne
        // leya hai to wo ap set ne kr skty 
        // to is leye ham bol rahy hai ke jo username usko find kro pehle se exists to nai krta 
        // User.find({ fullName }) yaha ham findOne be laga skty

        User.find({ fullName })
            //agr username nai hoga pele se to es me ajaye ga response as a saveduser
            .then(async (savedUser) => {
                if (savedUser.length > 0) {
                    return res.status(422).json({ error: "Username already exists" })
                }
                // yaha hamne bolna ke username pele se exist ne krta to ap new add kren
                else {
                    // yaha email se check kya hai mene ke jo email user dal raha wo hamry database
                    // me exist me krta ya nai ye ap na be lagaye mene wese he safety ke leye lagaya
                    User.findOne({ email: email })
                        // agr exists krta to ye kro 
                        .then(async (savedUser) => {
                            // agr email exist krta to bhai ap fullName, username change kr lo
                            if (savedUser) {

                                // yaha savedUser.fullName me old username para hai hamara
                                // or new username = fullName  yaha save hoga 
                                savedUser.fullName = fullName;
                                savedUser.save()
                                    .then((user) => {
                                        console.log("yes mohsin", user);
                                        // agr username saved hogya to ye 
                                        return res.status(422).json({ message: "Username Updated Successfully" })
                                    })
                                    // agr username saved nai howa to ye 
                                    .catch(err => {
                                        return res.status(422).json({ err: "Server Error" })
                                    })
                            }
                            // agr email mila he nai to ye kro
                            else {
                                return res.status(422).json({ error: "Invalid Credentials" })

                            }

                        })
                }
            })
    }

})




router.post('/setdescription', (req, res) => {
    const { description, email } = req.body;
    if (!description || !email) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    User.findOne({ email: email })
        .then(async savedUser => {
            if (savedUser) {
                savedUser.description = description;
                savedUser.save()
                    .then(user => {
                        res.json({ message: "Description Updated Successfully" });
                    })
                    .catch(err => {
                        return res.status(422).json({ error: "Server Error" });
                    })
            }
            else {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        })
})










router.post('/setfeedback', (req, res) => {
    const { feedback, email } = req.body;
    if (!feedback || !email) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    User.findOne({ email: email })
        .then(async savedUser => {
            if (savedUser) {
                savedUser.feedback = feedback;
                savedUser.save()
                    .then(user => {
                        res.json({ message: "FeedBack Updated Successfully" });
                    })
                    .catch(err => {
                        return res.status(422).json({ error: "Server Error" });
                    })
            }
            else {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        })
})






router.post('/setmessage', (req, res) => {
    const { message, email } = req.body;
    if (!message || !email) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    User.findOne({ email: email })
        .then(async savedUser => {
            if (savedUser) {
                savedUser.message = message;
                savedUser.save()
                    .then(user => {
                        res.json({ message: "Message has been sent Successfully" });
                    })
                    .catch(err => {
                        return res.status(422).json({ error: "Server Error" });
                    })
            }
            else {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
        })
})





// get searched user by keywords

// jo be user ke name m se ya n se shru hoty hai jo be kwyword me milega wo me yaha return krwaon ga as a response 

router.post("/searchuser", (req, res) => {
    // frontend se keyword nikalenge 

    // ye keyword bar bar change hoga jese ap ne m likha or bad me n 
    const { keyword } = req.body;


    if (!keyword) {
        return res.status(422).json({ error: "Please search a username" })
    }



    // us ke apko 1 chez use krne parti hai regex ye monogdb me hota hai
    User.find({ fullName: { $regex: keyword, $options: "i" } })
        // hamne bola regex me keyword dal do
        // ye basically keyword ko as a string treat krta hai
        // it treat as a substring of username
        // yani agr mene likha mo to sary mo waly user ajayen ge

        // uske bad hamne bola jo users hai wo is ke ander return hojayenge



        // jo ham user lerhy hai us se password be aye ga to esa nai krna
        // .then(user => {
        //     console.log(user);
        //     res.status(200).send({ message: "User Found", user: user })
        // })
        // is se bachne ke leye 
        .then(user => {
            let data = [];
            // ab is me push krdenge 
            user.map(item => {
                // us data me apko kya kya lena hai wo bta do
                data.push(
                    {
                        _id: item._id,
                        fullName: item.fullName,
                        email: item.email,
                        description: item.description,
                        profilepic: item.profilepic,
                    }
                )
            })
            // response bhejna

            console.log(data);
            if (data.length == 0) {
                return res.status(422).json({ error: "No User Found" });
            }
            res.status(202).send({ message: "User Found", user: data })
        })
        .catch(err => {
            console.log(err);
            res.status(422).json({ error: "Server Error" })

        })






})





// kise or user ka mujhe agr data chahyee 
// me us ka email provide kro or mujhe data mil jaye to e userdata wala route copy kronga
// get otheruserdata 


// me agr kise dosre user ki profile dekhna chahhta hun to 
router.post('/otheruserdata', (req, res) => {

    // sirf email chhaye
    const { email } = req.body;
    if (!email) {
        return res.status(422).json({ error: "Please add email" })
    }




    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" })
            }
            console.log(savedUser);

            // userdata me mujhe password ne chahyee
            let data = {
                _id: savedUser._id,
                fullName: savedUser.fullName,
                email: savedUser.email,
                profilepic: savedUser.profilepic,
            };


            res.status(200).send({ message: "User Found", user: data, })


            // console.log(data);


        })






    // User.findOne({ email: email })
    //     .then(userdata => {
    //         res.status(200).send({ message: "User Found", user: userdata })
    //     })
})






// check follow
router.post("/checkfollow", (req, res) => {
    const { followfrom, followto } = req.body;
    // followfrom = my email,
    // followto = friends email,
    console.log(followfrom, followto);
    // followfrom mtlb mera email 
    // followto mtlb jis ko follow kiya oska email 

    if (!followfrom || !followto) {
        return res.status(422).json({ error: "Invalid Credentials" })
    } 


    // me check krna chhata hun ke me osko follow kr raha hun ke nai
    // to pehle me khud ka email find kronga
    User.findOne({ email: followfrom })
        .then(mainuser => {
            if (!mainuser) {
                return res.status(422).json({ error: "Invalid Credentials" })
            }
            // agr mera khud ka mil gya data
            else {
                // following mtlb jis ko me follow krta hu 
                // let data = mainuser.following.includes(followto) // mainuser me khud hun
                // mtlb agr me apne dost ko follow krta hun to uska email mere following wali array me hoga
                // mere following [] kaha hai to ye database me hai

                let data = mainuser.following.includes(followto);
                // es pore code ka mtlb agr hamra following me hamary friend ka email hai to ham usy follow krty hai
                // console.log(data);
                // agr data sai hai to ham usefollow krty hain
                if (data === true) {
                    return res.status(200).send({ error: "User in following list" })

                }
                // agr data sai nai hai to ham usefollow nai krty hain

                else {
                    return res.status(200).send({ error: "User not in following list" })

                }

            }
        })
        .catch(err =>{
            console.log(err);
            return res.status(422).json({ error: "Server Error" })


        })



})


// follow user 

// unfollow user 

















module.exports = router;







// Day-5 Video
// sab se ham esko postman se generate krenege verification code ko jo user ko bhejna hai  uska bad baqi krenge to me
//  1 function banao ga or usy apny route me call kronga sab se pehle nodemailer ko install kr len
// nodemailer se ap dunia me kahe be email bhej skty hai bs es ko apko khud ka verify krwana prta hai jo admin hai uska password apko 1 bar verify
// krwana prta hai
// install krene ke bad nodemialer ka code copy krenge
// ye code ham uper copy kr rahy hai










