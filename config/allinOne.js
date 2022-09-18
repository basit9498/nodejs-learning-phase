const { MongoClient, ObjectId } = require("mongodb");
const dbConnectionConfig = require("./config/dbConnection");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "onlineCourse";
const collectionCourse = "courses";

async function dbConnection(collectionName) {
  const connection = await client.connect();
  const dbConnect = connection.db(dbName);
  const collection = dbConnect.collection(collectionName);
  return collection;
}

async function insertData() {
  const collection = await dbConnection(collectionCourse);
  const insertResult = await collection.insertOne({
    name: "JS",
    duration: "2:45 mnt",
  });
  console.log("insertResult", insertResult);
}

async function readData() {
  const collection = await dbConnection(collectionCourse);
  const result = await collection.find().toArray();
  console.log("Result", result);
}

async function updateData() {
  const collection = await dbConnection(collectionCourse);
  const result = await collection.updateOne(
    { _id: ObjectId("6314c54a017130e3c325dd9e") },
    {
      $set: {
        duration: "4:56 mint",
        fee: 567,
      },
    }
  );
  console.log("result", result);
}

async function deleteData() {
  const collection = await dbConnection(collectionCourse);
  const result = await collection.deleteOne({
    _id: ObjectId("6314c54a017130e3c325dd9e"),
  });
  console.log("result", result);
}

// insertData();
// readData();
// updateData();
// deleteData();
dbConnectionConfig(collectionCourse);
