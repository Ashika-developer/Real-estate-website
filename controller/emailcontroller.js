const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const nodemailer = require("nodemailer");
router.post('/sendMail',(req,res,next) =>{
    console.log('hii');
    const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "ashikamakki@gmail.com", // this should be YOUR GMAIL account
			pass: "ag236221**sk" // this should be your password
		}
	});

	var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
	var mail = {
		from: "ashikamakki@gmail.com", // sender address
		to: "request.body.email", // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
		subject: "Mail From Contact Form", // Subject line
		text: textBody,
		//html: htmlBody
	};
});

module.exports =router;