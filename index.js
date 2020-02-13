// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.text());
// app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   console.log(req.query.test);
//   res.send({
//     name: "test"
//   });
// });

// app.post("/users/:id", function(req, res) {
//   console.log(req.params);
//   res.send({
//     error: "c mamo"
//   });
//   res.status(403);
// });

// app.listen(8080, function() {
//   console.log("Listening in port: " + 8080);
// });

const express = require("express");
const app = express();
const commentRoutes = require("./routes/comments");

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

app.set("x-powered-by", false);

app.use(express.static("public"));

app.use("/comment", commentRoutes);

app.listen(8080, () => {
  console.log("Listening on 8080");
});
