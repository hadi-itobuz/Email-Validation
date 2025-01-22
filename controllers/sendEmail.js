import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken';
const sendEmail=(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "hadi@itobuz.com",
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    const token = jwt.sign({
            data: 'Token Data'  
        }, 'ABC123', { expiresIn: '1m' }  
    );    
    
    const mailConfigurations = {
        from: 'hadi@itobuz.com',
        to: 'hadi@itobuz.com',
        subject: 'Email Verification',
        text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               http://localhost:3000/verify/${token} 
               Thanks`
    };
    
    transporter.sendMail(mailConfigurations, function(error, info){
        if (error) throw Error(error);
        console.log('Email Sent Successfully');
        console.log(info);
    });
    res.send("Email sent")
}
export default sendEmail;