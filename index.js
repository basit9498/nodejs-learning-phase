const express = require("express");
const {
  getData,
  updateCourse,
  insertCourse,
  deleteCourse,
} = require("./database/courseDB");
// const updateCourse = require("./database/courseDB");

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/course", async (req, res) => {
  const result = await insertCourse(req.body);
  res.send({
    message: result,
  });
});

app.get("/course", async (req, res) => {
  const result = await getData();
  res.send({
    courses: result,
  });
});

app.put("/course/:id", async (req, res) => {
  const result = await updateCourse(req.params.id, req.body);
  res.send({
    message: result,
  });
});

app.delete("/course/:id", async (req, res) => {
  const result = await deleteCourse(req.params.id);
  res.send({
    message: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
