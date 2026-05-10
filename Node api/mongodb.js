const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const database = "student";

const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("profile");
}

module.exports = dbConnect;