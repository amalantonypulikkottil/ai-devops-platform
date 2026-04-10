//Version v1
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 AI DevOps Platform is Running! Version v1");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
