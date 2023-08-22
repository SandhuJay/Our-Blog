import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv'
dotenv.config();
const username=process.env.DB_username;
const password =process.env.DB_password;
const storage = new GridFsStorage({
    url:`mongodb://${username}:${password}@ac-ajy9wup-shard-00-00.xqscs2n.mongodb.net:27017,ac-ajy9wup-shard-00-01.xqscs2n.mongodb.net:27017,ac-ajy9wup-shard-00-02.xqscs2n.mongodb.net:27017/?ssl=true&replicaSet=atlas-i15qud-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return  {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 
