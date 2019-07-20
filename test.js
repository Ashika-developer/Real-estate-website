const userSchema = require('./model/usermodel');
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const saltRounds = 10;


bcrypt.hash("Ashika",saltRounds,function(err,hash){
    console.log("hash for Ashika::",hash);
    // console.log(bcrypt)

  
})
bcrypt.compare("Ashika", encryptedPassword, function(err, res) {
    // res == true
});

mongoose.connect('mongodb://localhost/Property');
var users=new userSchema({
    user:"name",
    password:"123",
    number:"12",


});

users.save(function(err,result){
    console.log(result);
})
    
