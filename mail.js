const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: 'key-dc0c3f29804fa85528e978bc7a734d94',
            domain: 'sandbox401c65c39a5b40a1a3842dc906bb00b4.mailgun.org'
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
