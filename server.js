const express = require("express");
const path = require("path");
const app = express();
const port = 7000;

app.use(express.static("public"));

const myDatabase = {
  greetings: { spa: "Hola Mundo!", eng: "Hello World!", fre: "Allô le Monde!" },
  names: ["Yorman", "Jhoan", "Pablo"],
};
// localhost:3000/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/greetings/:lan", (req, res) => {
  res.send(myDatabase.greetings[req.params.lan] || "Not Found");
});

app.get("/names/:name", (req, res) => {
  res.send(myDatabase.names[req.params.name] || "Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
