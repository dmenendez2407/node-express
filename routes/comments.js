const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all comments");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("get one comment by id");
});

router.get("/:id/:postId", (req, res) => {
  const { id, postId } = req.params;
  console.log(id, postId);
  res.send("get one comment by id and post id");
});

router.post("/", (req, res) => {
  res.send("create new comment");
});

module.exports = router;
