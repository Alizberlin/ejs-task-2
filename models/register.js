const nodemailer = require('nodemailer');
require('dotenv').config();

// create transporter object which contains email host configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST_PORT,
    auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

function register(register, cb) {
    const mailOption = {
        from: process.env.APP_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: 'Email from your website',
        html: `
        <h1>email from Register page in your website</h1>
        <p><strong>Name:</strong> ${register.name}</p>
        <p><strong>email:</strong> ${register.email}</p>
        <p>password: ${register.password}</p>
        <p>rePassword: ${register.rePassword}</p>

        `
    }
    transporter.sendMail(mailOption, (err, info) => {
        console.log(info);
        if(err) {
            cb({result: 'error'})
        } else {
            cb({result: 'done'})
        }
    })
}

module.exports = {
    register
}