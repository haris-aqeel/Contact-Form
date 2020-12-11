const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '92c47818bcdd6a6a0c0785567d021096-4879ff27-05d90125',
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
