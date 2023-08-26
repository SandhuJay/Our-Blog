import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = '';


let gfs, gridfsBucket;  
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage =  (request, response) => {

    if(request.file){
      const imageUrl = `${url}/file/${request.file.filename}`;

      return  response.status(200).json(imageUrl); 
    }
    
    else {
        return   response.status(404).json({msg:"File not found"});
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
       
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}
