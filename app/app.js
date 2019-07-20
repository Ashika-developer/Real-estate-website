const express=require('express');
const bodyParser=require('body-parser');
 const app=express();
const authController=require('../controller/authController');
 const sellController=require('../controller/sellController');
 const emailController=require('../controller/emailcontroller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use('/auth',authController);
app.use('/sellers',sellController);
app.use('/mail',emailController);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        name:"Ashika",
    });
});

module.exports=app;
