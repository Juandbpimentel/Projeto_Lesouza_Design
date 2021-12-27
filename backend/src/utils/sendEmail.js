const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../config/smtp");
const template = require('./templateEmail');
require('dotenv').config({path: '../config/.env'});

const transporter = nodemailer.createTransport({
    service: SMTP_CONFIG.service,
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports = {
    send: async function run(e) {
        const mailSent = await transporter.sendMail({
            text: 'sample text',
            subject: 'sample subject',
            from: `Marcus <${process.env.EMAIL}>`,
            to: ['marcusdavi.soar@gmail.com',
                'ryck302@gmail.com'],
            html: template.set(e)
        });
        console.log('Email enviado com sucesso!');
    }
}