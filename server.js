const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

// parse apllication/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil routes
let routes = require("./routes");
routes(app);

app.listen(port, () => {
  console.log(`Server started on port`);
});
