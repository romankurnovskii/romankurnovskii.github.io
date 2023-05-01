from flask import Flask, ObjectId, request, jsonify, make_response
from flask_cors import CORS
import json
from src.mongo import my_db


users_collection = my_db.users


app = Flask(__name__)
cors = CORS(app)


@app.route("/", methods=["GET"])
def get_user(user_id):
    user_id = request.args.get("id")
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        return jsonify({"error": "data not found"}), 404
    return jsonify({"user": user})


@app.route("/", methods=["PUT"])
def create_record():
    record = json.loads(request.data)
    user_id = record.get("user_id", None)
    users_collection.update_one({"_id": ObjectId(user_id)}, record)


@app.route("/")
def hello():
    return jsonify(message="Hello!")


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error="Not found!"), 404)


def internal_server_error(e):
    return "error", 500


app.register_error_handler(500, internal_server_error)
