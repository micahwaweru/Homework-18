const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//require(apiRoute)(app);
require("./routes/apiroutes.js")(app);
require("./routes/controller.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});




// const app = express;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// // routes
// app.use(require("./routes/api.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });