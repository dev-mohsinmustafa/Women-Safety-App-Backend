
const mongoose = require("mongoose");

const bcrypt = require('bcrypt');



// 15
// Schema 1 structure hota hai yani koi be message mere pass aya hai to us me kya kya hona chahye 1 to message khud hona chhaye us ke bad
// us ke bad kis user ki details hone chhaye 
// sender ki id
// receiver ki id
// ye sab hamy btana prega na 


const messageSchema = new mongoose.Schema({
    // es me hamy 4 chezen chaye
    //  senderId chahye
    //  receiverId chahye
    //  message chahye
    //  roomId chahye



    // senderId mtlb kis ne bheja 
    // receiverId mtlb kis ko bheja 
    // roomId mtlb kis room me bheja 2 log baat chet kr rahy hai to unka  1 room hoga na
    // message mtlb message kya hai


    senderid: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    receiverid: {
        type: String,
        required: true
    },

// yaha pe timestamps true kr dena es se ap ko easy rhega ke kn sa message kb aya us hisab se sort krna hai na to es ke easy prega
// to es se easy hoga jab apke pass 1 2sre ke message bhjo ke to wo sorted order me milenge 

}, {
    timestamps: true
})

// ye basically message ka model hai ke koi be message database me kese save hone wala hai mtlb ye 1 {} bane ga
// is me senderId or receiverId zarori nai the lekin ye tb kam ayega jese man lo mene apni purani chat se kin kin logo se baat chet ki sab 1 list
// me dekhta hai na instagram me jab ham chat kholty hai os ke 1 bandy ki chat open krty hai to jab sab ki chat open krty hai sab logo ki jo chat
// dkhti hai us ke leye ye bot kam ane wala hai
// ham bolenge ke hamri jo id hai us me ye btao ke kis kis messages ke ander senderId hai to us hisab se chat bhj do abhi es ko bad me smjhe ge 

mongoose.model("Message", messageSchema);

// jese he me es user jo uper hai ko call kro to me userSchema ki baat kr raha hun

//2 module.exports = mongoose.model("User", userSchema);


// ab ham DATABASE ko connect krenge db.js me