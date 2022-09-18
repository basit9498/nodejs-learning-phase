const { ObjectId } = require("mongodb");
const dbConnectionConfig = require("../config/dbConnection");

const collectionCourse = "courses";

const insertCourse = async (body) => {
  const collection = await dbConnectionConfig(collectionCourse);
  const result = await collection.insertOne(body);
  return result;
};

const updateCourse = async (id, body) => {
  const collection = await dbConnectionConfig(collectionCourse);
  const result = await collection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: body,
    }
  );

  return result;
};

const deleteCourse = async (id) => {
  const collection = await dbConnectionConfig(collectionCourse);
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result;
};

const getData = async () => {
  const collection = await dbConnectionConfig(collectionCourse);
  const result = await collection.find().toArray();
  return result;
};

module.exports = {
  insertCourse,
  deleteCourse,
  updateCourse,
  getData,
};
