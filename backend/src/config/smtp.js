require('dotenv').config({path: 'config/.env'});

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user: process.env.EMAIL,
    pass: process.env.PASS,
};