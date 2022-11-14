import json
from pymongo_get_database import get_database
dbname = get_database()

restaurant = dbname.restaurants_list
menu = dbname.menuitems_list


f = open('dining.json')
data = json.load(f)
index = 100
for i in range(len(data)):
    menu = []
    for j in range(len(data[i]["Menu"])):
        item = {
            "_id": index,
            "name": data[i]["Menu"][j]["Menu Item"],
            "restaurant": i
        }
        #menu.insert_one(item)
        menu.append({index})
        index = index + 1
    rest = {
        "_id": i,
        "name": data[i]["Restaurant"],
        "menuitems": menu
    }
    print(rest)
    print("\n")
    #restaurant.insert_one(restaurant)
