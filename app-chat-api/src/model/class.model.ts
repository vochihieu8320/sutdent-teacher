import mongoose from 'mongoose';

const Class = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true,
            unique: true,
            minlength:3,
            maxlength:50,
        },
        
       
    },
    { timestamps: true }
)

const model = mongoose.model('Class', Class);
export default model;
