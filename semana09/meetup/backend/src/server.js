const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

const app = express();

const DATABASE_CONNECTION =
  "mongodb://omnistack:omnistack@localhost:27017/omnistack9";
// "mongodb+srv://omnistack:omnistack@cluster0-chrxj.mongodb.net/semanaomnistack9?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao servidor com sucesso...");
  })
  .catch(err => console.log("erro de conexão db error=> " + err));

// where you register the locations that can be accessed from api
app.use(cors({})); // empty value - releases all {origin: http://localhost:3333}

app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); // «« config mostrar imagem
app.use(routes);
app.listen(3333);
