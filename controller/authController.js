

const express = require('express');
const userSchema = require('../model/userModel');
const bodyParser = require('body-parser');

const router = express.Router();

const bcrypt=require('bcrypt');
const saltRounds = 10;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Property');
console.log('ghj');

router.post('/signup',(req,res,next) =>{
    console.log("inside singuo");
    var hash=bcrypt.hashSync(req.body.password,saltRounds);
    var userJson={
        user:req.body.user,
        loginID:req.body.loginID,
        password:hash,
        number:req.body.number,
        userType:req.body.userType
    }
   
    var users=new userSchema(userJson)
    users.save(function(err,result){
        console.log('result');
       
        if(err){
            res.status(500).json(err);


        }else{
            console.log('good');
            res.status(200).json({
                status:"success",
                data:result
            })
        }
    })
});
router.post('/login',(req,res,next) => {
    console.log("Entered Login :: " , req.body);

    userSchema.findOne({loginID:req.body.loginID},function(err,result){
        console.log(result);
        if(err){
            res.status(500).json(err);

        }else if(result != null){
            //req.body.password == result["password"]
            console.log(bcrypt.compareSync(req.body.password,result["password"]))
            if(bcrypt.compareSync(req.body.password,result["password"])){
                res.status(200).json({
                    status:"success",
                    data:result
                })

            }else{

                res.status(200).json({
                    status:"failure",
                    data:null
                })


            }
        }
    })
});
        

//     })

// });


module.exports =router;