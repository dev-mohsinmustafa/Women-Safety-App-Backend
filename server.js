
// // 1
// const express = require('express');

// // 2
// const port = 3000;

// // 3
// const app = express();
// // const dotenv = require('dotenv');

// // 4
// // Jis format me data araha usko JSON ki form me convert krdo usko BODYPARSER kehty hai ya iska kam ye hai 
// // ke agr JSON format me araha hai data to hame pata kr ke btao ke kis format me data araha hai
// const bodyParser = require('body-parser');



// // dotenv.config();




// // 24 db in database
// require('./database/db');
// // const setupDB = require('./database/db');
// // 25 user in model
// require('./models/User')



// // 26
// const authRoutes = require('./routes/authRoute');


// // setupDB()
// // 5
// // ab hamy app.get call krna prega ab uske jagah yebe call kr skty ho
// // ye apka jo be data ata hai usko JSON format me pass kr deta hai yani jo be data server me araha wo JSON me aye ga
// app.use(bodyParser.json());

// // 27
// // ab ese use krwana  hai to es ke neche likhenge 
// app.use(authRoutes)




// // 6
// // app.get('./') is ka multab ham homePage me hain 
// // or usme HELLO WORLD return krdo ya khush be uske bad server run kren npx nodemon index.js
// app.get('/', (req, res) => {
//     res.send('This is home page');
// })


// // 8 
// // ab me chahta hun ke me 1 signup wala page page banao jis se me user ka data get kron
// // mtlb user ne jab data post kiya to uskeleye POST ki REQUEST generate hoti hai 
// // POST request jab be call hoge hamy kese pata chalega to wo ham bad me dekhenge 
// // USER ne apna data signup krne ke leye bheja to ham route me signip likhenge


// // agr hamne postman se koi data yaha pe console.log krwaana hai to waha se ye data ese bhejen ge
// // Data from Postman and show in console.log(req.body);
// // {
// //     "name": "Mohsin Mustafa",
// //     "class": "BSCS",
// //     "semester": "8"
// // }

// // 9
// //  ye code likh ke ham postman me gye waha pe post ki request banai or data test kiya

// // 24
// // ab ham routing yaha nai rkhenge kyo ke ye bohat zayada types ki hoti hai
// // app.post('/signup', (req, res) => {
// //     // ye data postman se yaha pe bheja yani yaha pe log lagaaya or data hame show hoga
// //     // yani jo be requested body hai wo yaha ajaye ge
// //     console.log(req.body);
// //     // ye data yaha se postman pe bheja yani test kiya
// //     res.send('This is signup page');
// // });

// // setupDB();

// // 10
// // es ke bad bohat sary paths hamary ese nai hote hamne ab sabse me apna DATABASE setup kr leta hun 
// // me apne MONGODB ke database se connect kr leta hun ab esy me download nai kronga Internet wale mongodb ATLAS
// // se connect kr longa uska faida ye hai ke ham use apny pc me install ni krty internet se acces krlete hai live


// //7 kis port pe server chalana hai usko listen be krwana hai
// app.listen(port, () => {
//     console.log(`server is working on port ${port}`);
// })





// // 11
// // uske bad me db.js ka folder bana leta hun
// // 12
// // or 1 model ka folder bana leta hun
// // model ka matlab ke me user ki kush details set krna chahta hun save krna chahta hun
// // yani uska name hogya email hogya to mujhe 1 structure batana prega ke is structure me data aya tb he tm loge








// const express = require('express');
// const port = 8090;
// const app = express();
// const bodyParser = require('body-parser');

// require('./database/db');
// require('./models/User')

// const authRoutes = require('./routes/authRoute');

// app.use(bodyParser.json());

// app.use(authRoutes)


// app.get('/', (req, res) => {
//     res.send('This is home page');
// })



// app.listen(port, () => {
//     console.log(`server is working on port ${port}`);
// })










// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 27017; // Specify the desired port number

// // MongoDB connection URL and database name
// // const url = 'mongodb://localhost:27017';
// const uri = "mongodb+srv://mohsinmustafaansari:mohsinmustafaansari@cluster0.m6xozxd.mongodb.net/womenSafetyApp?retryWrites=true&w=majority"

// // Connect to MongoDB
// MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('Error connecting to MongoDB:', err);
//         return;
//     }

//     console.log('Connected to MongoDB');

//     const db = client.db();

//     // Define your API endpoints here
//     // Example:
//     app.get('/api/users', (req, res) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 res.json(users);
//             })
//             .catch((error) => {
//                 console.error('Error retrieving users:', error);
//                 res.status(500).send('Internal Server Error');
//             });
//     });


//     app.get('/', (req, res) => {
//     res.send('This is home page');
// })

//     // Start the server
//     app.listen(port, () => {
//         console.log(`Server listening on port ${port}`);
//     });
// });









const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./database/db');
dotenv.config();
connectDB();
const app = express();



// const twilio = require('twilio');

// // Replace these values with your Twilio credentials
// // const accountSid = 'AC77a2f31bd1b657b1666eac01fe8af3ef';
// // const authToken = 'd696df1d56a0bf1501e94ca6a6339374';
// // const twilioPhoneNumber = '+17692103456';
// const accountSid = 'AC19932939aaafef73eb1cb96de5fa16e0';
// const authToken = '40214c74a4079d32c8fd6d8510ce55c1';
// const twilioPhoneNumber = '+12512972937';

// const client = twilio(accountSid, authToken);










  

const bodyParser = require('body-parser');

// require('./database/db');
require('./models/User')
require('./models/Message')

const authRoutes = require('./routes/authRoute');
// token ko lagane ke leye as a MIDDLEWARE 
const requireToken = require('./middleware/AuthTokenRequired');
const uploadMediaRoutes = require("./routes/UploadMediaRoutes");
const MessageRoutes = require("./routes/MessageRoutes");
const twilioRoute = require("./routes/twilioRoute");
// const SendDistressSignalShake = require("./routes/SendDistressSignalShake");




// Video 19
// aj hamne socket.io keleye 1 server banana hai socket ka 1 elada server banta hai
// ham es ko elada file me be bana skty hai
// ham ese asumme kr skty hai ke jo port hai 8090 wo us ko ham 2 bar use kr rahy hai 1 node js or socket.io
// sab se pehle http se hamy 1 server banana hai
const { createServer } = require("http");
// us ke server ko import kr lena hai
const { Server } = require("socket.io");
// eske bad hamy 1 server bana hai
// const httpServer  = createServer(app); es me ham app be likh skty hai
const httpServer = createServer();
// or yaha ab server banany keleye mene yaha bol diya yani ab ham 1 new server setup kr rahy hain socket.io ke leye 
const io = new Server(httpServer, {}); // abi ke leye {} ye blank chor de lekin is ne options be likhty hai  
//







app.use(bodyParser.json());

app.use(authRoutes)
app.use(uploadMediaRoutes)
app.use(MessageRoutes)
app.use(twilioRoute)
// app.use(SendDistressSignalShake)







// not working
  
// app.post('/sendDistressSignal', async (req, res) => {
//     try {
//       // Get the emergency contacts from the database or any other source
//       const emergencyContacts = [
//         { name: 'Emergency Contact 1', phoneNumber: '111-111-1111' },
//         { name: 'Emergency Contact 2', phoneNumber: '222-222-2222' },
//         // Add more emergency contacts as needed
//       ];
  
//       // Send the distress signal using Twilio
//       emergencyContacts.forEach((contact) => {
//         const message = `Distress signal from SOS app. User needs immediate assistance. Location: Latitude: XX.XXXXX, Longitude: YY.YYYYY.`;
//         client.messages
//           .create({
//             body: message,
//             to: contact.phoneNumber,
//             from: twilioPhoneNumber,
//           })
//           .then((message) => console.log(`SMS sent to ${contact.phoneNumber}: ${message.sid}`))
//           .catch((error) => console.error('Error sending SMS: ', error));
//       });
  
//       res.status(200).json({ message: 'Distress signal sent to emergency contacts.' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to send distress signal.' });
//     }
//   });
  

//





// ab ham yaha pe middleware laga denge TOKEN
// hamne bola ke jese he ye page load ho to pehle requireToken kro os ke bad response/request bhejo
// ab ham authTokenRequired me jaye ge  
app.get('/', requireToken, (req, res) => {
    // user ka data jese he mil jaye to ham log krwa skty hain usy 
    // ab hamary key to verify hogae
    console.log("Mohsin data check kro yr middleware ke token se", req.user);
    res.send(req.user);
    // res.send('This is home page');
})




// SOCKET.IO
// sab se pehle apko connection banana rehta hai  ke bhai user ne chat join ki hai 
// os ke bad agr chat join ki hai to kis se ki hai mtlb samny wala banda be hai na
// to in 2no ka ham 1 ROOM bana denge 
// ab ROOM me esa nai hai ke sirf 2 bndy ho es me bohat sary bandy ho skty hai 
// bohat sary bandy honge to ye GROUP CHAT hoge agr 2 huye to CONVERSATION hoge 
// to es me ap khush be kr skty ho to abhi ke leye me 2 bndo jor raha hun ya / wala set kr raha hon
// Ap isme GROUP CHAT be laga skty ho



// 
// apne sab se pehle likhna hai 
// connection wala 1 command hota hai jo FRONTEND se ham ese dene walay hai ke bhai jese he frontend se ye connect hoga to ye connection wala
// command hai wo run hojaye ga socket ka 
//socket ko abhi ham frontend se connect krenge 
io.on("connection", (socket) => {
    // to ham ne bol deya ke agr connection howa hai to socket me jo be details aye hai us me sirf hmay id chahye us id ko 
    // ham man lenge ke user ki id hai || ya is id se user connect howa hai 
    // multiple type ke bohat sari id hoskti hai jese viraj 1 bnda hai wo 1 random id se connect howa hai 
    // random id mtlb 
    // esa nai ke email id hai ya user id hai us se connect howa esa nai hota yaha RANDOM koi id generate hoge or us se he connection ban jayega

    console.log("USER CONNECTED - ", socket.id);
    // user connect hoga to uski id ham display krwa denge kon se id SOCKET wali id  // socket.id
    // socket.id random hoti hai koi be fixed nai rehti 
    // mtbl aj me 1 id se join howa to 5 mint bad 1 dosri id se join howa esa chlta rhega
    // console.log socket.id ye sirf es leye likha pata krene ke leye ke koi join howa to ye id print hojaye ge
    // agr koi join howa hoga chat pe to pata lag jaye ga 2 he log join hone waly hai me or mera dost to 2 ids generate honge 
    // ye to user connect hogya

    // es ke bad hamy ye be bataana prega ke agr user ne chat chor de to 1 disconnect wali command call hojaye 
    // or kon sa user disconnect howa hai us ki id be print krwa denge 


    socket.on("disconnect", () => {
        console.log("USER DISCONNECT - ", socket.id);
    })

    //  es ke bad ese he agr kise user ne ROOM JOIN kiya hai to 
    // WHAT IS ROOM?
    // me 1 chat khol ke betha hun or samny wala be 1 chat khol ke betha howa hai ab dono ko chat to same he dekhenge na mtlb agr wo mere 
    // chat khol ke betha hai ya me uski chat khol ke betha hun to chat to same he show honge na 
    // to basically wo 1 chat store hoti hai ROOM me to ham us ROOM se connect krty hai jab be ham us dost se baat chet krna chahty hai /
    // jese he ham us ROOM se connect howe to ham uski details mang lenge ke bhai abhi tk kya baat chet howi hai to es leye ham ROOM bana rhy hai


    // to ap ye samjh len ke 1 kamry me 2 log bethy baat kr rahy hai  
    // 2sre kamry me 2 log bethy baat kr rahy hai 
    // to sab ka seperate seperate room hone wala hai 
    // mtlb private conversation jo hoti hai 2 logon ki to us me 2 logon ka 1 kamra hoga 
    // ese he 2sre logon ka dosra kamra hoga 
    // ye log unki chat ne dekh skty or wo inki nai dekh skty  es se basically ye hota hai ke jis ko message bhejna sirf ussi ke pass pohanchy

    // to es ke leye 1 !ROOM banana hai
    // es ke leye 1 simple ka command ham frontend se banay waly hai  mtbl name fixed ne rehta ap koi name de do ap join_room likh lo
    // or es data ke ander jo be details wegara hai wo es ke ander ajyenge ke kis room se connected hai
    socket.on("join_room", (data) => {
        // to room hamko esa banana prega ke jis se ap bol skty ho ke ye 1 ROOM hai 1 2 3  esko agr me next time call kron to mujhe us se 
        // related chats be mil jaye esa nai hai ke bhai chat ud jaye gaib hojaye mujhe chats be saved krwani hai to us keleye 

        // ab ROOM ki jo id hoti hai na es me room ki 1 id ham bana skty hai 
        // us id ko ham kya kr skty hai ke bhai ma lo mera jo user hai jo ORIGINAL DATABASE ME JO ID STORED HAI JO HAR BAR USER KE KAAM ATI HAI
        // JO USER KI ID HAI ORIGINAL JO CHANGE NAI HOTI


        // JESe man lenge viraj123 / vj0987 ye 2 id hain 
        // to kyo na ham 1 esa room bana den jis ko me kabi be call kro to mujhe in dono ki chats milen
        // TO ROOM ESA HONA CHAHYEE JIS KI ID KABI BA BADLEN TO ID AP simple se rkh lo // hj123vj0987
        // hj123vj0987 to esa 1 combination banaa ke ham MONGODB database me store krwa denge or ese ko call kr lenege 
        // mtlb database me store ne krwaye ge is ko  
        // basically hone wala ye hai ke 1 user hai 2sra user hai to un 2no ki id combine hoke to yehe bane ga na to bs ham es room ko call krlenge
        // or us ROOM ke ander jo be chats save honge wo wapis ho ke hamy mil jayenge sirf itna krna hai 

        //ab ap bologe ke bhai combination esa be to hoskta hai na  // hj123vj0987  ham vj0987 ko pehle likh len or save krewaden // vj0987hj123 
        // to esa bilkul hoskta hai to es ke leye hai kya lagayenge sorting wala 1 lagayenge ke bhai 2 user id ko sort kro ke 1 bari ho or 1 choti
        // to hamesha esa hoga ke bari wali pehle he aye ge to esa kush ne hoga ke udr se apne hj123 wala pehle mil esa kuch nai hai
        // agr hj123 wala es side se bara hai to us side se be bara he hoga to ese ham save krwane waly hai es ko agy ham or check lekin
        // abhi mene apko bata diya ke room ki id ese hone wali hai kush
        // mtlb 2 user ki ORIGINAL id jo database me save hoge to use me se ham 1 esa hj123vj0987 combination bana denge

        //  ham yaha kush esa print krwayege ke jo joined user hai us ki be id mil jaye or ROOM ki id be miljaye
        // to ap simply socket.id ko be print krwa dena
        console.log("USER WITH ID - ", socket.id, "JOIN ROOM - ", data.roomid);
        // mene bola ke user hai us ki ye wali id hai socket.id or usne join kiya ye wala room data.roomid
        // to roomid ham frontend se bhej denge hj123vj0987 ese wali 
        // dekho frontend se kush data aye data me or us me se ham data.roomid room ki id nikal lenge 


        // es ke bad ham 1 command lagana baqi rehti hai socket.join

        // hamy es data se join krwana hai hmy is id se join krwana hai 
        // ham simply data likhdenge data likhenge us ke ander jo be chezen hoti hai ajati hai to ye data pora bhjna prta hai
        socket.join(data);

        // data bhejne se banda es room id me join hojaye ga 
        //  jese he mene apne dost ki chat open ki to me is me join hojaon ga 
        // mtlb me apni userid nikalonga or dost ki userid nikalonga or un 2no ka combination bana ke me backend se bhej donga mene bol deya ke mene ye chat join krley
        // to bs es se backend me ye chat ane wali hai 



        // es ke bad 1 sendmessage wala hota hai 
        socket.on("send_message", (data) => {
            // es me 2 chezen hoti hai 1 to apne message send kiya or dosre ko recieve be hona chahye 
            // to apne message send kiya or wo backend me aye or backend se ham user ko 1 notification bejen ke han bhai us bandy ne message bheja hai
            // to ye real time ke leye kam ane wala hai realtime chat ke leye
            // to bas apne krna hai jo be message recieve howa hai wo print krwa lenge hi hello wala kis ne kya message bheja wo be dekhe ga


            console.log("MESSAGE RECEIVED - ", data);
            // data mtlb 1 esa object type ka bhejen ge ke jis ke ander 
            // /message hoga 
            // jis ne bheja uski id hoge
            // apni id hoge ese chezen ham bhejne waly hai
            // ye sab frontend se bheje ge us se backend me aye ga ye


            // es ke bad emit krna prega hmy
            // io. es name ka variable lagaya tha na es leye
            //ab jese he apne message send kiya to recieve be to krwana hai na samny waly ko
            // samny waly ke pass message jana chahye us ke received_message wala hota hai
            io.emit("received_message", data);
            // es se received_message be fire hoga
            // jese he ham message send krenge to frontend se received_message ko fire krwaye ge

            // ye ham ne jitna be banaya hai ye sab frontend se fire honge or backend me jese he ye notification ajaye gen to agy proceed kro
            // es ke elawa be socket.io me chezen hoti hai ap laga skty ho lekin abi ke leye ye bohat hai
        })


    })


})
//


//
// 1 kam ham aor kr skty hai ke ham es ka 1 seperate port bana lete hai jo mene shru me btaya tha apko ese be join hojaye lekin ap seperate bana lo
// es se easy rahega

const PORT1 = process.env.PORT1 || 8091; // ap 8090 ye same port be rkh skty hai  
httpServer.listen(PORT1, () => {
    console.log(`SOCKET IO Server is running on port ${PORT1}`);
})

// to ab apko kush routes be banay hai to me message routes bana leta hun 
// es se basically kya krenge ke bhai apne aj 1 message kiya dsot ko to apko database me save be to krwana hai 
// eaa nai hai ke apne chat band ki wapis ayo ge to wapis be to apko chahye to socket.io se save ne hoti chat bas realtime chat dekhti hai
// purane message ur jaye ge to us ke leye ap database me save krwa lo jese he mene wo page khola apne dost ki chat kholi to mujhe chat dikh jaye ge 
//load hojae ge or jitna realtime hai wo socket chal jaye ge to us me ap database ka use krne waly hai route bana ke 
//



const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



