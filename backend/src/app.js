const express = require('express');
const cors = require('cors');
const emailSender = require('./utils/sendEmail')

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    emailSender.send(req.body);
});

app.listen(5000, () => console.log('listening at 5000'));