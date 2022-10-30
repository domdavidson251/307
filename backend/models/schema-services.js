const mongoose = require('mongoose');
const RestaurantSchema = require("./schemas");

let dbConnection;

function getDbConnection() {
    if (!dbConnection) {
        dbConnection = mongoose.createConnection("mongodb://localhost:27017/users", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    return dbConnection;
  }

async function getRestaurants(name){
    const restaurantModel = getDbConnection().model("Restaurant", RestaurantSchema);
    let result;
    if (name === undefined) {
        result = await restaurantModel.find();
    }
    else if (name) {
        result = await findRestaurantByName(name);
    }
    return result;
}

async function findRestaurantById(id){
    const restaurantModel = getDbConnection().model("Restaurant", RestaurantSchema);    
    try{
        return await restaurantModel.findById(id);
    }catch(error) {
        console.log(error);
        return undefined;
    }
}

async function findRestaurantByName(name){
    const restaurantModel = getDbConnection().model("Restaurant", RestaurantSchema);
    return await restaurantModel.find({'name':name});
}

async function addRestaurant(restaurant) {
    const restaurantModel = getDbConnection().model("Restaurant", RestaurantSchema);
    try{
        // You can use a Model to create new documents using 'new' and 
        // passing the JSON content of the Document:
        const restaurantToAdd = new restaurantModel(restaurant);
        const savedRestaurant = await restaurantToAdd.save()
        return savedRestaurant;
    }catch(error) {
        console.log(error);
        return false;
    }   
}

exports.getRestaurants = getRestaurants;
exports.findRestaurantById = findRestaurantById;
exports.addRestaurant = addRestaurant;

