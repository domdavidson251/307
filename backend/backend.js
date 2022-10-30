const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

//FOR TESTING PURPOSES
const reviews = { 
    reviews_list : []
 }

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/reviews', (req, res) => {
    res.send(reviews);
});

app.post('/reviews', (req, res) => {
    const reviewToAdd = req.body;
    reviews['reviews_list'].push(reviewToAdd);
    res.status(200).end();
});

//get restaurants
// get restaurant by id
// get restaurant by name
// get menu items
// get menu item by id
//get ratings
//post(add) rating
//post(add) menu item
//post(add) restaurant
//delete rating
//delete restaurant
//delete menu item

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});   