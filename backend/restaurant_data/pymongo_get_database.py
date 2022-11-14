from pymongo import MongoClient
import certifi
def get_database():
   # Create the database for our example (we will use the same database throughout the tutorial
   conn_str = "mongodb+srv://domdavidson251:Dom251rocks@cluster0.jycgx75.mongodb.net/?retryWrites=true&w=majority"
   client = MongoClient(conn_str, tlsCAFile=certifi.where())
   db = client.test
   return db
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   dbname = get_database()