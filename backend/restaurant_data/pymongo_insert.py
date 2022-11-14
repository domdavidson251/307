import json
from pymongo_get_database import get_database
from bson.objectid import ObjectId
dbname = get_database()

restaurant = dbname.restaurants_list
menu_items = dbname.menuitems_list


f = open('dining.json')
data = json.load(f)
index = 100
for i in range(len(data)):
    menu = []
    res_id = ObjectId()
    for j in range(len(data[i]["Menu"])):
        men_id = ObjectId()
        item = {
            "_id": men_id,
            "name": data[i]["Menu"][j]["Menu Item"],
            "restaurant": res_id
        }
        print(item)
        menu_items.insert_one(item)
        menu.append(men_id)
        
    rest = {
        "_id": res_id,
        "name": data[i]["Restaurant"],
        "menuitems": menu
    }
    print(rest)
    print("\n")
    restaurant.insert_one(rest)
