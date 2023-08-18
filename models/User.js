// 12 
// or 1 model ka folder bana leta hun
// model ka matlab ke me user ki kush details set krna chahta hun save krna chahta hun 
// yani uska name hogya email hogya to mujhe 1 structure batana prega ke is structure me data aya tb he tm loge

// 13
// me user ka data lena chahta hun to User.js ke name se folder bana leya

// iske ilawa ham bohat sary models bana skty hain 
// like productModel.js
// user.js

// 14
// ap jis type ka form bharty ho name bhara email bhara password bhara address bhara
// to uska 1 structure yaha pe btana prega ke ye ye hai ye ye hai
// is me ham ye be bol skty hai ke agr apne name empty chordiya hai to yaha se 1 RESPONSE bheje ke 
// Please fill all the details yani yaha se ham response be bhej skty hai yehe kam ham FRONTEND me be kr skty hai
// ke agr form empty hai to lekin frontend me poora VERIFICATION ne hoskta yaha pe ham VERIFICATION be kr skty hai
// to ye bohat PLUS POINT hota hai backend me


// to pehala kam ye krenge 


const mongoose = require("mongoose");

const bcrypt = require('bcrypt');



// 15
// Schema 1 structure hota hai yani user ka name email password  dob
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // emial me unique chez ye rkhne kyo ke esa nai hai ke mera pehle se koi email exist krta hai 
        // aor ap phr se us ko signup ne krwa skty es leye email unique: true rkhna hai   
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: ''
    },
    feedback: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    },
    followers: {
        type: [],
        default: ''
    },
    following: {
        type: [],
        default: ''
    },
    allmessages: {
        type: Array,
        default: []

        // me hun A or tm ho B mene msg kiya tmko hello
        // to jo sary logo ki list hai mere profile se jin jin se mene baat ki to us me mujhe mera lastmessage dekhe ga 
        // A    B  -> hello

        // uske apne mujhe msg kiya how are you tb mujhe mere lastmessage kya dekhega to wo apka dekhega na obviously to ham ye krne waly hai
        // B   A -> How are you? 

    },
})



// 16
// ye hamara DATABASE ka SETUP hogya hai


// 17
// yaha pe ham ese EXPORT krenge es ko export krne ke 2 ways hain
// 1




// day 3 Video
// yani save krne se thek pehle 1 kam krdo mera ke es password ko key me krdo
// yaha pe apne boldena hai hamary password Mohsin1122 ko 1 key me convert kr do
// to yaha pe hamko SCHEMA likhna prega SAVE krne wala SCHEMA krne ke bohat se method hai lekin eska 1 method
// hai save wala
// pre mtlb save krne se pehle 
// or () isme hame method batana prega save wala
// itna bol deya ke save krne se pehle tm ye chalo kro or bad me 1 function bana lo 
// or oske ander next de deya middleware jese ke es se agy ka kam kro next
// yaha pe agr ham next nai denge to dikat hojaye ge error aye ga

// this is middleware

userSchema.pre('save', async function (next) {
    // to yaha me check krta hun ke agr ham koi new user banaty hai 
    const user = this;
    // user ka data print krwa leya
    console.log("Just before saving before hashing", user);
    // ab hame kya bolna hai ke user ka jo password hai usko hash krdo usko convert krdo bcrypt me
    // to yaha pe ham aye ge or likhenege ke 
    // agr apne jo password bheja hai agr wo pehle se hashed hai to kush mat kro e.g" if (!user
    // hamne bol deya ke agr pehle se hashed hai to agy barh jao 
    if (!user.isModified('password')) {
        return next();
        // or ager nahi hai to ap bolo ge ke jo user pasword hai
    }


    // bcrypt ko ab require be krlen uper
    // user.password yani ye mera original password hai Mohsin1122 es
    //  ko me change kr donga ke jo be mera password hai usko exchange krdo 
    // hash password se yani 1 key bana do 
    // es se hamara password koi hack ne kr skta
    // ab server me hamara password es taran save hoga
    // password: '$2b$08$fZezC.h5aMprKl5fkvUOFOkZ1e6pZbAPM4BZTlX8ns11IOPywoWWC',
    // pehle Mohsin1122 es taran save hota tha

    user.password = await bcrypt.hash(user.password, 8);

    // ham ese print be krwa skty hain 

    console.log("Just before saving and after hashing", user);
    // ab ham es password ko save to krwa lya hai ab ham compare krenege
    // hamne password save to krwa lya ab ham signin krwaye ge login krwaye ge
    // uske leye ham LOGIN ka ROUTE banaye ge 
    // route me jake

    next();
})


mongoose.model("User", userSchema);

// jese he me es user jo uper hai ko call kro to me userSchema ki baat kr raha hun

//2 module.exports = mongoose.model("User", userSchema);


// ab ham DATABASE ko connect krenge db.js me