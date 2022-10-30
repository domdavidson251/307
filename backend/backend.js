const express = require('express');
const cors = require('cors');

const services = require('./models/schema-services');

const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());

//FOR TESTING PURPOSES
const reviews = { 
    reviews_list : []
 }

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/restaurants', async (req, res) => {
    const name = req.query['name'];
    try {
        const result = await services.getRestaurants(name);
        res.send({restaurants_list: result});
    } catch (error) {
        console.log(error)
        res.status(500).send('An error ocurred in the server');
    }
});

app.get('/restaurants/:id', async (req, res) => {
    const id = req.params['id'];
    const result = await services.findRestaurantById(id);
    if (result === undefined || result === null) {
        res.status(404).send('Resource not found.');
    }
    else {
        res.send({restaurants_list: result});
    }
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