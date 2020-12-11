const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config({path: __dirname + '/.env'})


const auth = {
        auth: {
            api_key: process.env.API_KEY,
            domain: process.env.ORIGIN
        }
    };

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, name, subject, message, cb) => {
    const mailOptions = {
        from: email,
        sender: name,
        subject: subject,
        to: 'harisaqeel.2001@gmail.com',
        text: message

    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

}


// Exporting the sendmail
module.exports = sendMail;
