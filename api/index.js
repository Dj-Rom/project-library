const express = require('express');
const cors = require('cors');
const data = require('./data/booksList.json')

const app = express();
const getRandomBook = () => {
    const randomIndex = (Math.round(Math.random() * data.length))
    const randomBook = data[randomIndex]
    return randomBook
}
app.use(cors())

app.get('/random-book', (req, res) => {
    res.json(getRandomBook())
})
app.get('/random-book-timeOut', (req, res) => {
    setTimeout(() => { res.json(getRandomBook()) }, 3000)
})


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})