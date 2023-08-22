import express from 'express';
import Connection from'./database/db.js'
import dotenv from 'dotenv';
 import Router from './routes/route.js'
 import cors from 'cors'
 import bodyParser from 'body-parser'
dotenv.config();
const app= express();
app.use(cors());
app.use(bodyParser.json({extented:true}))
app.use(bodyParser.urlencoded({extented:true}))
app.use('/',Router)

// if(process.env.NODE_ENV==='production'){

//     app.use(express.static("client/build"))
// }
const port = process.env.port || 8000;
app.listen(port,()=>{console.log(`Server run successfully on port :${port}`)})
const username=process.env.DB_username;
const password=process.env.DB_password;

const URL= process.env.MONGODB_URI||`mongodb://${username}:${password}@ac-ajy9wup-shard-00-00.xqscs2n.mongodb.net:27017,ac-ajy9wup-shard-00-01.xqscs2n.mongodb.net:27017,ac-ajy9wup-shard-00-02.xqscs2n.mongodb.net:27017/?ssl=true&replicaSet=atlas-i15qud-shard-0&authSource=admin&retryWrites=true&w=majority`
Connection(URL);