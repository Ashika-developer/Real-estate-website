

const express = require('express');
const sellerSchema = require('../model/sellermodel');
const bodyParser = require('body-parser');

const router = express.Router();

// const bcrypt=require('bcrypt');
// const saltRounds = 10;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/Detailssell');
console.log('gmj');

router.post('/myseller',(req,res,next) =>{
    console.log("inside sell");
    var sellers=new sellerSchema(req.body)
    sellers.save(function(err,result){
        console.log('result1',err);

        if(err){
            res.status(500).json(err);
        }else{
            console.log('good1');
            res.status(200).json({
                status:"success",
                data:result
            })
        }
    })
});
router.get('/',(req,res,next) =>{
    console.log("inside ");
    sellerSchema.find(function(err,result){
        if(err){
            res.status(500).json(err);
        }else{
            console.log('good1');
            res.status(200).json({
                status:"success",
                data:result
            })
   
        }
    })
});
    

        

//     })

// });


module.exports =router;