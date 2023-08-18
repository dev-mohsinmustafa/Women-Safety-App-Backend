
// // 18
// // DATABASE connect krne ke leye hamy sabse pehle 1 key chahyye ke kis DATABASE ke sath apko connect krna hai 
// // to ye bohat simple hai
// // apko google pe ja ke mongodb atlas likha hai 
// // ye cloud database hai mtlb me download wale ke baat ne kr raha mtlb hmne ese download ne kiya ese leye ye CLOUD hai


// // 19
// // yaha pe hamne us key ko import krna hai jo hamne .env me define ki hai
// // usko import krne ke leye usko require krna prega 

// // 20
// // sab se phle to hamne yaha db connect krne keleye usko import krna hai jese
// const mongoose = require('mongoose');

// // 21
// // ab us key ko import krenge uskeleye usko hamy btana prega ke ke is folder me usko be require kr rahy hain dotenv file ko
// //  mtlb hm env file me jo key use kr rhy hai usko yaha use krna hai
// // require('dotenv').config();

// // const dotenv = require('dotenv');
// // dotenv.config();

// require('dotenv').config();

// // 22
// // ab us variable ya key ko hamne use krna hai to ye ham btaye je 
// // agr hamen ye nai likha process.env.mongo_URL to HACKERS hack krlenge hamri database ko
// mongoose.connect(process.env.mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("connected to database");
// })
//     // es ke bad catch banaa prega ke koi be error ata to is catch me ajaye ga
//     // to catch me me error rkhoga ke koi be agr error aye to ham yaha pe console.log krwa denge
//     .catch((err) => {
//         console.log(`could not connected to db ${err}`);
//     })

// // 23
// // ab hamne db to bana leya lekin ab ese chalo be krna hai to ham ese server me jake require kr lenge jese
// // import krty hain








// // // const mongoose = require('mongoose');
// // // // const dotenv = require('dotenv');
// // // // dotenv.config();
// // // const setupDB = async () => {
// // //     try {
// // //         await mongoose.connect(process.env.mongo_URL, {
// // //             useNewUrlParser: true,
// // //             useUnifiedTopology: true,
// // //         });
// // //         console.log('Successfully connected to the database');
// // //     } catch (error) {
// // //         console.log(`Could not connect to the database: ${error}`);
// // //     }
// // // };

// // // module.exports = setupDB;












// const mongoose = require('mongoose');

// require('dotenv').config();

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect(process.env.DB);
//     console.log("db connected");

//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// module.exports = mongoose;


// const mongoose = require('mongoose');
// // const mongo_URL = "mongodb://0.0.0.0:27017"
// require('dotenv').config();


// // main().catch(err => console.log(err));

// const connectToMongo = async () => {
//     await mongoose.connect(DB);
//     console.log("db connected");

// }

// module.exports = connectToMongo;


// const {MongoClient} = require('mongodb');

// require('dotenv').config();
// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://mohsinmustafaansari:mohsinmustafaansari@cluster0.m6xozxd.mongodb.net/womenSafetyApp?retryWrites=true&w=majority";

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         // await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);
// module.exports = MongoClient;























const mongoose = require('mongoose');


const dotenv = require('dotenv');
dotenv.config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}
module.exports = connectDB

// // const mongo_URL = "mongodb://0.0.0.0:27017"
// require('dotenv').config();


// // main().catch(err => console.log(err));

// const connectToMongo = async () => {
//     await mongoose.connect(DB);
//     console.log("db connected");

// }

// module.exports = connectToMongo;
