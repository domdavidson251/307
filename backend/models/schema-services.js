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

exports.getRestaurants = getRestaurants;
exports.findRestaurantById = findRestaurantById;

