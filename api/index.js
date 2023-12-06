const express = require('express');
const cors = require('cors');
const data = require('./data/booksList.json')

const app = express();

app.use(cors())

app.get('/random-book', (req, res) => {
    setTimeout(() => {
        const randomIndex = (Math.round(Math.random() * data.length))
        const randomBook = data[randomIndex]
        res.json(randomBook)
    }, 10500);
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})