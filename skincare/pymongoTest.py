# # Step 1 - Install and import pymongo
# import pymongo

# # Step 2 - Create MongoDB client
# conn_str = "mongodb+srv://klpham137:m0ngoo_DB6969@test.0rys8om.mongodb.net/?retryWrites=true&w=majority"

# try:
#     client = pymongo.MongoClient(conn_str)  # Use the connection string
#     print("Connection to MongoDB successful!")
# except Exception as e:
#     print("Error: " + str(e))

# # Step 3 - Create a DB
# myDB = client["pymongo_demo"]

# #step 4 - create a collection
# myCollection = myDB["demo_collection"]

# #step 5 - create a document
# myDoc = {
#     "name":"Katie",
#     "message": "This is pymongo demo"
# }

# # #step6 - insert the document
# # res = myCollection.insert_one(myDoc)
# # print(res.inserted_id)
# # print(client.list_database_names())

# #step 7 - reading the document
# record = myCollection.find_one()

# print(record)

# # #step 8 - updating the record
# # query = {
# #     "message":"This is pymongo demo"
# # }

# # new_val = {
# #     "$set": {"message": "Welcome to coding 101 with Steve"}
    
# # }

# # new_record = myCollection.update_one(query, new_val)
# # print(new_record)

# #reading the document after updating
# record = myCollection.find_one()

# print(record)

# #step 9 - delete the record
# query_del = {
#     "name": "Katie"
# }

# record_del = myCollection.delete_one(query_del)

# #reading the document after deleting
# record = myCollection.find_one()

# # print(record)

import pymongo
import certifi

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://klpham137:m0ngoo_DB6969@test.0rys8om.mongodb.net/", tlsCAFile=certifi.where())


# Select the database and collection
db = client["skincare"]
collection = db["products"]

query = {'Label': 'Moisturizer'} 
result = collection.find_one(query)

if result:
    print("Found document in the collection:")
    print(result)
else:
    print("Document not found in the collection.")

# Find all documents
result = collection.find_one(query)

# Iterate through the results
for document in result:
    print(document)
