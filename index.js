const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())

const datas = require('./datas/data.json');
const details = require('./datas/details.json');

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/booking/:id', (req, res) =>{
    res.send(datas);
})

app.get('/details/:id',(req, res) =>{
    const id = req.params.id;
    const selectedDetails = details.find(detail => detail.id === id);
    res.send(selectedDetails);

})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
})

