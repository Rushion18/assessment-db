const express = require('express');
const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const express = require ('express'); 
const app = require ('express');
const bodyParser = require ('body-parser')
const db = require ('./database');

app.use = express.json();
app.post ('/notes, async (req, res) => {
    const {title, content} = req.body;
    const createdAt = new Date().toISOString();

    const pool = await db.poolConnect;

    const request = pool.request();
    request.input('title', db. sql.);
    request.input('content', content);
    request.input('created_at', createdAt);

    const result = await result.query('INSERT into notes)
})