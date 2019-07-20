const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    user:{type:String ,required:true},
    loginID:{type:String ,required:true},
    password:{type:String ,required:true},
    number:{type:String ,required:true},
    userType:{type:String,required:true},
    createdOn:{type:Date,default: new Date()}
    // console.log('hiii');
    
});
console.log('hiii');
module.exports=mongoose.model("users",userSchema);
