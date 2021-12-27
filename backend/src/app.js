const express = require('express');
const cors = require('cors');
const testando = require('./utils/sendEmail')

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    //console.log(req.body);
    res.json({message:'Deu tudo Certo!'});
    testando.send(req.body);
});

app.listen(5000, () => console.log('listening at 5000'));