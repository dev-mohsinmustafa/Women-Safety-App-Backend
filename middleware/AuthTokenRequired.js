
//  Day 3 Video Lecture
// 1
// es ka mtlb ham yaha pe 1 esa middleware bana rahy hain jo check krega ke hamary pass jo TOKEN hai wo 
// wo valid wala hai ke nai agr hai to agr nai hai to tab be ham 1 response bhej skty hai 
// to 2 3 chezen hamy import krne hain

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model("User");
// const User = require("../models/User");

require('dotenv').config();

// 2
// next kya krega ke agr apka kam ban gya hai to es ke agy kya dikhana hai wo dikha do to next is leye kam ata hai

// 3
// abi ap itna samjo ke hamy abi ke leye header bhejna hai kesa header to 1 chez dekha me rkhna 
// ham POSTMAN me jayen or jo TOken hamy mil raha hai signup page me 
// ab me jab be apny page ko access krna chahun ga to agr mere pass TOKEN hai to me compare kronga 
// ke ye TOKEN hamaary kise USER ki id se match krega ka nai or es ke ander jo key chupi hui jai JWT ki
// wo hamari key se match krti hai ke nai to basically ab ham es TOKEN ko verify krna waly hain 
// wo TOKEN hame milega kaha pe 
// abhi sirf itna samjho ke ye jo MIDDLEWARE hai kaha pe lagana chahhty hai
// ham es middleware ko server me laga denge get ke route pe laga denge 



// 4 
// to ab ham print krne ke khosish krty hai ke hamara token araha hai ya nai to log laga dete hai
// ab ap dekhe skty console.log(authorization); me hamy key mil rahi hai 

// 5 ab hamy compare krna hai ke ye key pehle exists krti hai ke nai 

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log(authorization);

    // 5 ab hamy compare krna hai ke ye key pehle exists krti hai ke nai 
    // agr key exist nai krti to 
    // is if ka mtlb agr hamne postman me authorization nai define ki to error me show ho logged in 

    // agr hamne key nai de or direct access krna chahty hai apni app ko to nai kr skty 

    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in , key not given" });
    }

    // ab me yaha pe TOKEN ko store krne wala hun
    //  agr key mil gaye to wo token me store hojaye ge 
    const token = authorization.replace("Bearer ", "");
    // console.log(token);


    // es ke bad ham TOKEN ko verify krenge 
    // ab hamne Bearer me jo token hai us ki jagah apna name likh diya to dekhne me wo apko TOKEN lage ga 
    // lekin wo TOKEN hamary DATABASE me mtlb hamne jo jwt ki key set ki hui hai or userId ke leye wo TOKEN banaya hai
    // us se match krna chahyee na to ham likhnge 


    // ke bhai apne jo ALPHABETS me likha huwa hai jese name to wo exists krta be hai ke nai
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in , token invalid" })
        }


        //agr hamara TOKEN valid ho jata hai to es ke baad ham bolenge ke user ki id nikalo 
        // ab hamne dekhna hai ke user ki id kese bheje hui hai to ham userRoute me dekhe ge  { _id: user._id }
        // to us me se _id ko copy kr le 

        // pehle hamne TOKEN ko key se verify kiya hai ab ham ese ID se verify krenge jo id hamne copy ki hai usko 
        // compare krenge us key se jo pehle banani hai 
        // pehle hme key se verify kiya ab ham id se verify kr lenge 

        // uske bad hamne bol deya ke hamari jo id hai us se ham compare kr rahy hain 
        const { _id } = payload;

        // or uske baad hamne store krwa lya 
        // hamne bola ke us id ko nikal lo jo hamne uper jo bheje hai payload bheja howa
        // or ab hamne bol deya ke us id ko find kro hamari database se 
        // to agr wo kise be id se match krti hoge hamari database se match krti hui
        //  to iska matlab ke key genuiune the 
        // or then me hamne itna bol deya ke jo user ka data araha hai hamne bol deya bs req.user = userData
        // to es se hamara server ka data update ho jaye ga server pe milne lagy ga mtlb  
        // apki client side wapis any lagy ge 
        // hamne bs 1 key bheje or us key se user ka sara data nikal lya server se pehle hamne key ko check kiya 
        // or phr data nikala 
        // ab hamary key to verify hogae
        // jab user login krne ke try kreaga to ye key generate hoge or phr compare krenge 
        // ab agr hamene password database me save krwana hai to bcrypt se hoga wo 
        // or kab hoga ye store thek data save hone se pehle
        // data save kab horaha hai us ke lye apne jaha pe model banaya howa hai 

        User.findById(_id).then(userdata => {
            // res.user = userdata;
            res.status(200).send({ message: "User found", user: userdata })

            next();
        })

    })














    // next();
}



