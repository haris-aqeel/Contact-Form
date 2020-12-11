const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const port = process.env.PORT || 7000;
const bodyParser = require('body-parser') 
const sendMail = require('./mail');
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/public/index.html');
})

app.post("/", async(req, res)=> {
    const {email, name, subject, message }  = req.body;

    
    await sendMail(email, name, subject, message ,function(err, data) {
        console.log(err)
        try{
            res.status({ message: 'Email sent!!!' });
        
        }catch(err){
        
            res.status(500).json({ message: 'Internal Error' });
        
        }
        
    });
    res.send("Email has been")

    
})


app.listen(port, ()=> {
    console.log("listening to port 7000")
})