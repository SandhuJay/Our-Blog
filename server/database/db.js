import mongoose from 'mongoose'

const Connection=async(URL)=>{
    
    try{
        await  mongoose.connect(URL,{useNewUrlParser:true})
        console.log("dB connected successfully")
    }catch(err){
   console.log("err in connection",err)
    }
}
export default Connection;