const mongoose=require('mongoose');

const sellerSchema=mongoose.Schema({
    property:{type:String ,required:true},
   image:{type:String ,required:true},
    location:{type:String ,required:true},
    price:{type:String ,required:true},
   
    createdOn:{type:Date,default: new Date()}
    // console.log('hiii');
    
});
console.log('hiii');
module.exports=mongoose.model("sellers",sellerSchema);
