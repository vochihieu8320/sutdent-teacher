import mongoose from 'mongoose';

const User_class = new mongoose.Schema(
    {
       userID: { 
           type: String,

       },
       classID: {
           type: String
       }

        
       
    },
    { timestamps: true }
)

const model = mongoose.model('user-clas', User_class);
export default model;
