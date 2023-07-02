const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  
    
     username:{
        type:String,
        required:true,
        unique:true, 
     },

     email:{
        type:String,
        required: true,
        unique:true,
     },

     password:{
        type:String,
        required: true,
        unique: false,
     },

     profilePic:{
         type:String,
         default: "",
     },

}, {timestamps:true}
);

const user = mongoose.model("user", UserSchema);
module.exports = user;