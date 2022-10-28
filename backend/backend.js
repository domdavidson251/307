const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
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