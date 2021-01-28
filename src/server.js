const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//setting Staticpath
const staticPath = path.join(__dirname, "../public");

//middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
