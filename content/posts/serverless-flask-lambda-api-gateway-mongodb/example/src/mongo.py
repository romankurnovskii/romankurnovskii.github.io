import os

from pymongo import MongoClient

MONGO_CONNECTION_STRING = os.environ.get(
    "MONGO_CONNECTION_STRING", default="mongodb://localhost:27017/"
)
MONGO_COLLECTION_DB_NAME = os.environ.get(
    "MONGO_COLLECTION_DB_NAME", default="test-mydb"
)


db_client = MongoClient(MONGO_CONNECTION_STRING)
my_db = db_client[MONGO_COLLECTION_DB_NAME]
