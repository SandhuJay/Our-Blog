import mongoose from 'mongoose'
const tokenSchema=mongoose.Schema({
    token:{
        type:String,
        
    }
})
const token =mongoose.model('token',tokenSchema);
export default token;