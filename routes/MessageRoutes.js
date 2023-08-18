// to ab apko kush routes be banay hai to me message routes bana leta hun 
// es se basically kya krenge ke bhai apne aj 1 message kiya dsot ko to apko database me save be to krwana hai 
// eaa nai hai ke apne chat band ki wapis ayo ge to wapis be to apko chahye to socket.io se save ne hoti chat bas realtime chat dekhti hai
// purane message ur jaye ge to us ke leye ap database me save krwa lo jese he mene wo page khola apne dost ki chat kholi to mujhe chat dikh jaye ge 
//load hojae ge or jitna realtime hai wo socket chal jaye ge to us me ap database ka use krne waly hai route bana ke 

// or 1 message ka model banana hai



// ab hamne new route bana lya code zayada hogya tha usme
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Message = mongoose.model('Message');

const jwt = require('jsonwebtoken');


require('dotenv').config();

const bcrypt = require('bcrypt');

// SAVED MESSAGE TO DATABASE ROUTE


// koi be message agr frontend se ayega ke mene agr message send kiya hai to wo database me save be to hona chaye na

router.post("/savemessagetodb", async (req, res) => {
    // jo jo hamne model me rkha hai yaha hamy wo chahye
    const { senderid, message, roomid, receiverid } = req.body;
    // to ye hamne chezen nikal le
    // frontend se ham ye data bhejen ge na 
    // jab me me frontend se sendmessage wale pe fire kronga to ye chezen mere pass ayenge backend me
    // es ke print krwa le
    // console.log("MESSAGE RECEIVED - " , req.body);

    // es ke bad try catch
    try {
        // es ke ander ham likhenge new message
        // koi mera new message hoga jo me database me save krwana chahata hun
        // or mene bola ke es ke ander 1 new Message ka model bane ga us ke ander ham wo chezen provide kr den ge jo hamy frontend se arahe hain
        const newMessage = new Message({
            // frontend se kya aya 
            senderid,
            message,
            roomid,
            receiverid,
        })
        // es ke bad apne save krwana hai database me 
        await newMessage.save();
        // thora rukye 
        // os ke bad jesse he response ajaye ga to res send kr denge 
        res.send({message: "Message Saved Successfully"});
        
    } catch (error) {
        console.log("ERROR WHILE SAVING MESSAGE TO DB line 57 - ", error);
        // error.message me jo be error aye ga us ka message hamary frontend me ajaye ga backend se 
        res.status(422).send(error.message);
    }
})

// ap 1 kam aor kr skty ho har 1 message ki 1 id be save krwa skty ho but abhi mene nai krwai db me
// ye kb kam aye ge man lo mene apna mobile band kr dya or 5 mint bad phr on kiya to mujhe purane msg dekhenge na to database se call hoga
// jab be me chat call kronga 1 bar open kronga chat to mujhe purane message be dekhane hai to us ke leye database me save honi chahye chat
// to ese he apki chat instagram ki db me save hoti hai 





//  ab 1 new route banaye ge 
// GET MESSAGE ROUTE
// mtlb mene 1 roomid provide ki roomid kis ki hoge 
// apne postman me testing krty waqt notice kiya hoga ke 
// roomid = combination of senderid + reciever 

// roomid = 12345678
// senderid = 123456789
// receiverid =  987654321
// ye logic me apko frontend se samjhaon ga ke kon sa pehle lagana hai kon sa bad me


// me bolonga ke agr in dono ke id mmila ke agr roomid ban rahe hai to is roomid ko ham serach krwayege hamari database me 
// to ham database ki logic ne kahenge ke jo roomid ki value us id se match krte hai to wo chat dekha do 
// 2 logo ki baat chet me hamy yehe show krwana hai na

// ab agr koi 2sre room id hoti to ham wo chat/message show nai krwaty kyo ke wo dosre ki chat hai  
// to es se ham pata lgwa rhy hai ke ye hamari chat hai 
// ab sort kese kroge to use ke leye hamne timestamps laga deya hai 


// ab mene apko bta deya ke ham messages kese get krne waly hai to ham roomid se get krenge   

// to ham yaha bolenge ke koi specific roomid provide krenege us se related jitne be messages hai hamry database me sab ajayenge 
// 2 logo ki chat ki 1 roomid hogi na roomid common hoge us se related jitne be chat hai wo hamary pass ayenge to es ko dekhty hai 


// apne 1 chez note ki hoge ke me hamesha post request call kr raha hu 
// ham data bhej be rahy hai es leye me post ka use kr raha hun zayada ap ki marzi hai 

router.post("/getmessages", async (req, res) => {

    const { roomid } = req.body; // frontend se le
    // jis ki be mene chat open ki hoge mere id or mere dost ki id mila ke jo roomid hai wo ham backend me bhej denge to yaha hamne bhej de


    // ab ham yaha aye ge or kahenge ke bhai esy sary messages dhondo jis me roomid uper wali ho to mene jitne be messages bheje honge


    // or jo database me sender or receiver ki id hai wo change honge lekin roomid samne rahege yehe roomid ka faida hai
    // to frontend se ham 1 he roomid bhejen ge es he order me to me apko uska logic samjhaon ga kis ki phle aye ge kis ke bad me//
    // to basically me bolonga ke bhai wo sary messages dhondo jin me roomid same ho
    // frontend se ham roomid nikal ke backend me bhejege ham


    // hamne roomid nikal le ab bolenge ke jo message wala hamara collection hai us me se saary wo wale messages de do jis me hamri roomid ye wali 
    // ho jo frontend se mangwa hai hamne hai


    Message.find({ roomid: roomid })
        .then(messages => {
            // agr 1 be message nai hoga to koi be message nahi na aye ga to us me error rahe ga e nai 
            // to yaha pe mene es leye direct response bhej dya ke bhai jo be msg mle bhej do
            // agr 1 be message nai hoga to koi be message nahi jaye but response to jaye ga na but wo null jaye ga empty wala
            // to wo bad me dekh lenege 
            // frontend me bol denge ke agr messages ki length 0 hai to ham boldenge ke bhai apne abhi tk baat chet ne ki to ham
            // start messages dekha denge   
            res.send(messages)
            // yaha pe jitne be chat honge wo ayenge 
        })
        .catch(error => {
            console.log("Error getting the message line 133 - ", error);
            res.status(422).send(error.message);
        })


})




// es ke bad apko 1 or route banaa hai setusermessages wala
// es route se kya hone wala hai 
// basically ham ye bol skty hai ke bhai mene agr tmse baat chet ki to mera jo last message hai wo mere
// instagram me dekhte hai jo last message wo likh ke ata hai yani last chat dekhti hai 
// to es ke leye ham kya krenge 
// me bolonga ke jab be mene message kiya hai ya us ne message kiya to ye list update kr do 2no users ki 
// yani us ka last msg be update hoga or mera be jo ham puri list me dekhane waly hai ke mohsin ne last msg ye kiya tha or hassan ne ye
// to ham ye roue banaye ge


// dono users ke last messages
router.post("/setusermessages", async (req, res) => {
    // es me apko btana hai ke apko kya kya chahye 
    // to me bolonga ke mere userid "ouruserid"
    //  dost ki userid "fuser"
    // lastmessage
    // roomid
    const { ouruserid, fuserid, lastmessage, roomid } = req.body;
    // last message jis ne bheja hai usko yaha bs update krwana hai 

    // console.log("MESSAGE RECEIVED - ", req.body);

    // yaha ham kahenge ke user ki id ko find kro khud ki id ko find kro mtlb ham jis ki be id bhej rahy hai usko hamne find krwaya hai 
    // or os ke lastmessages ko update krwana hai 

    // ham bolenge ke hamari jo userid hai hamari jo fuserid waly bndy se conversation hai uska bs lastmessage define kr do bs
    // to me khud ki find kr longa 
    // id kya hone chahye ke bhai ese id dhondo jo match krte ho apne id se to apni details ajayen ge mene 
    // findbyuserid isleye krraha hun to id se match krwne ke leye hmne khud ka data pehle nikal lya 
    User.findOne({ _id: ouruserid })
        // khud ka data ajaye ga to us ke bad bolenge ke hamari jo list hoge
        // me 1 allmessages wala be define kr deta hu usermodel me ke bhai us ki last bar kis kis se baat hui the to uska 1 array mil jaye ga 
        // uska name uska lastmessage or uski photo to uski ye details pehle save krwa lo model me



        // me hun A or tm ho B mene msg kiya tmko hello
        // to jo sary logo ki list hai mere profile se jin jin se mene baat ki to us me mujhe mera lastmessage dekhe ga 
        // A    B  -> hello

        // uske apne mujhe msg kiya how are you tb mujhe mere lastmessage kya dekhega to wo apka dekhega na obviously to ham ye krne waly hai
        // B   A -> How are you? 

        // to ye same route dosre waly keleye be call krne waly hai ham 

        .then(user => {
            // to ham yaha hamari profile se bs itna bta denge ke fuser se jo haamari baat hui us ka lastmessage kya hai 
            // uper hamne pehle khud ki profile niklwa le ab hm ye krennge

            // jo hamne schema banaya hai allmessages wala
            // user.allmessage jin jin logo se hamari baat hui  un ko ham pehle to map krwa lenge kyoke hamy find krna hai kush 

            user.allmessages.map((item) => {
                // jitne be messages hai unko map krwa lenge 

                // or ham bolenge ke jis id se hamary dost ki id match krti ho 
                // mtlb ouruserid A hai or fuserid B hai 
                // to me bolonga jo be id B se match krege hamari allmessages ki list me to us ko update kr do bs
                if (item.fuserid == fuserid) {
                    // es se kya hoga apne assume krna hai 
                    // hamne abi hata lya us ka last message
                    // hi old mesaage
                    user.allmessages.pull(item.fuserid);
                }
            })

            const date = Date.now(); // miliseconds me jo be hoga wo yaha mil jaye ga miliseconds me ata hai yaha time

            // to ab me bolonga ke phr se wohi new message push kr do yani update kr deya phr se lastmessage 
            // usi user ki id dal di yaha jis ka pehle message pull kiya tha or ab mesaage be push kr dya dal dya  
            // how are you => new mesaage
            user.allmessages.push({
                ouruserid,
                fuserid,
                lastmessage,
                roomid,
                date,
            })

            // es ke bad bas ap save krwa 
            user.save();
            // es ke bad bas bol do message saved successfully
            //yaha try catch be laga skty ho 
            res.status(200).send({ message: "Message saved successfully" })
            // es se hamri list update hoge
            // jo hamari list hai us me user se jo be baat hui hai uska lastmessage update hogya yaha  
            // IMPORTANT 

            // lekin yaha sirf Ahsan ka last message update howa hai jo neche hamne likha hai 
            // lekin agr Hassan or Ali ka lastmessage be update krwana hai to us ke leye be ye route call krenge neche 
            // or waha mohsin ki id hassan ki id denge or jo new lastmessage jis ne be bheja wo update hojaye ga
        })
        .catch(error => {
            console.log("Error updating all chats line 239 - ", error);
            res.status(422).send(error.message)

        })
})









// ab ye to mene set krwaya hai 
// ab man lo mene apna chat wala section khola hai jis me mujhe sab logo ki chat dekhti hai list me sab ke name or unki chat 
// to uske leye be apko 1 route banana parega uper wala to sirf set krne ke leye tha ke bhai chat update kr rahy hai ham 

// to ab hamy get krna hai to us ke leye be to 1 route banana prega 

// to man lo me chahta hu ke mene mere jo profile hai usme un logo ki chats dekhne lagen jin se mene baat chet ki hai unke last messages dekhene
// lage jin se me ne baat ki hai jese instagram me dekhta hai 
// to us ke leye ap 1 route banaao

router.post("/getusermessages", async (req, res) => {

    // pehle to ap id lelo mujhe agr mere list chahye chat wali to mere kin kin se baat hui hai to mujhe mere id bhejne prege 

    const { userid } = req.body;
    // console.log("USERID RECEIVED - ", userid);

    // es ke bad ham khud ki id find krenge or us me all messages wala jo list usko simple print krwa denge 

    User.findOne({ _id: userid }) // us id ko dhond lo jiska hamari id se match krta ho
        // us ke bad hamy data mil gya khud ka 
        .then(user => {
            // khud ka data
            res.send(user.allmessages); // message wala aray agr huwa to mil jaye nai to blank kyoke abhi abhi hamne es ko add kiya hai 
            // kyo ke me save ne krwaya koi be to allmessages me kush ho ga e nai empty jaye ga agr erorr how to neche log
        })
        .catch(error => {
            console.log("error getting all chats line number 278 - ", error);
            res.send(422).send(error.message)
        })
})

// ab hamne bs ese frontend se connect krna hai





module.exports = router;


// assume
// allmessages
// Mohsin -> Hassan se baat ki hoge
//        -> Ahsan se baat ki hoge
//        -> Ali se baat ki hoge

// to in 3 bando ke name last message or profilepic show honge na 1 list me yani vertically Hassan Ahsan or Ali ke

// to yaha pe sirf 1 chez dekhan me rkhna me bolonga ke
// apna id bhejon ga ouruserid yani mohsin ki id
// or me chahta hun ahsan ka lastmessage update krna hai
// ahsan ka jo last message mere profile me aya hai ya mene usy kiya hai to wo update hojaye to
// es ke leye mene ahsan ki id bhej de fuserid ke name se hai jo or ussi id ko compare kr leeya map me item.fuserid == fuserid
// mene bola ke hamary pass jo lastmessages hain ham list me name se show ne krwaye ge id se krwaty hai ham bolenge ke
//  ahsan ki jo id hai jo hamari body se jo id arahi hai fuserid es se match krwao
// agr match hojati hai to tb he hoga ke chat agr pehle se exists krti hai
// agr chat exists he nai krti to ye match he nai krega na hamary allmessages me wo id hoge e nai
// ham bolenge ke jo hamara allmessages wala array hai us me se bhai wo chat pull krwa lo kis ki dost ki jo hamary dost fuserid hai uski
// or ham phr se update kr ke new lastmessage bhej denge usi user ke name se me apko samjhta hu