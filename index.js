// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv'); // it helps us to manage enviroment variables(which basically consistes of sensitive data) in a secure way.
 
// const app = express();
// const port = 3000;
// //require('dotenv').config();
 
// app.use(express.static('public'));
 
// //middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
 
// //const route = express.Router();
 
// //ceate reusable transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//     //port:465,
//     service:'gmail',
//     host: "smtp.gmail.com",
//     auth: {
//         user:'arpitaroy2089@gmail.com',
//         pass:'gcvh xyiz vkct bqnd',
//     },
//     secure: true,
// });
 
// app.post('/sendemail',(req,res)=>{
//     const{to,subject,text}=req.body;
//     const mailInfo = {
//         from: 'arpitaroy2089@gmail.com',
//         to,
//         subject,
//         text,
//         //to: 'arpitaroy2089@gmail.com',
//         //subject: 'Sending email using Express Node Js',
//         //text:'Hurray it was easy application',
//         //html:'<h1>Hello User, We have been successfully able to send an email for the very FIRST time.</h1>',
//         //html:'<h1>Hello User, We have been successfully able to send an email for the SECOND time.</h1>',
//     };
 
//     transporter.sendMail(mailInfo, function(err, info){
//         if(err)
//             return console.log(err);
//         else
//             res.status(200).send({message:"Mail send", message_id:info.message});
//     });
// });
 
// //app.use('/a1', route);
 
// app.listen(port,()=>{
//     console.log(`Server listenting on the port ${port}`);
// });
 // my-code
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000; 

// // create the middle ware 
// app.use(express.json());
// app.use(express.urlencoded( { extended: true } ));

// // define the server that 
// app.use(express.static('public'));

// //define route for home page
// app.get ('/', (req, res) =>
//     {
//     res.sendFile( __dirname + '/public/send-email.html' );
//     })

// // configure nodemailer 
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//     Service:'gmail',
//     auth:{
//     user:'naveen461ece@gmail.com',
//     pass:'pjli eygb wwrl vdsu',
//     }
// });

// // create the route for the form 

// app.post( "/send-email", ( req,res )=>{
//     const  { to,subject,message } = req.body;
//     const mailoptions = {
//         to,
//         subject,
//         message
//     };

//     transporter.sendMail(mailoptions,(err,info)=>{
//         if(err){
//             console.error(err);
//             return res.status(500).send('error in sending mail');
//         }else{
//             console.log('email sent successfull' + info.response);
//             res.send( 'email has been sent successfully!' );
//             }}
//     );
    
// });

// app.listen(port, ()=>
// {
//     console.log(`server is running on ${port}`) ; 
// })

//RRRRRRRRRRRRRRRRRRRRR
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// CREATE the middleware for parsing requested bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define to the server that the static files are stored inside the public folder
app.use(express.static('public'));

// define the route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/send-email.html');
});

// configure nodemailer
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'naveen461ece@gmail.com',
        pass:'pjli eygb wwrl vdsu',

    }
});

// create the route for the form
app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;

    const mailOptions = {
        from: 'naveen461ece@gmail.com', // Sender email address
        to,
        subject,
        text: message // Assuming 'message' is the actual text content
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error in sending mail');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// start the server with a specific port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});