const express = require("express");
const app = express();
const port = 3000;
const { resolve } = require("path");

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "../public", "index.html"));
});

app.listen(port, () => {
  console.log(`coverLetterGenerator is listening at http://localhost:${port}`);
});
