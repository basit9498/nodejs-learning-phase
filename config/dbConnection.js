const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "onlineCourse";
const client = new MongoClient(url);

module.exports = dbConnectionConfig = async (collectionName) => {
  const clientConnection = await client.connect();
  const dbConnection = await clientConnection.db(dbName);
  const dbCollection = await dbConnection.collection(collectionName);
  return dbCollection;
};
