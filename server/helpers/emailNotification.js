const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const hmtlTemplate = require('../views/emailHtmlTemplate');
//This method will send a link to the user's email, ask the user to activate his/her account
sendEmail = (req, res, subject, message, html, emailList) => {
       

    let mailOptions = {
        from: '"Crypto Team" <cryptotrackerservices@gmail.com>', // sender address
        to: emailList, // list of receivers
        subject: subject, // Subject line
        text: message, 
        html: html // html body
    };
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cryptotrackerservices@gmail.com',
          pass: 'crypto5656'
        }  
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(400).send({
                error: error
            })
        }
    })
    
},

sendEmailNotification = (subject, message, user, content, emailList) => {
    
    let html = hmtlTemplate.formNotificationHtml(user, content);

    let mailOptions = {
        from: '"Crypto Team" <cryptotrackerservices@gmail.com>', // sender address
        to: emailList, // list of receivers
        subject: subject, // Subject line
        text: message, 
        html: html // html body
    };
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'cryptotrackerservices@gmail.com',
          pass: 'crypto5656'
        }  
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error: " + error);
        }
    })
    
},



module.exports = {
    sendEmail,
}
