const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando"
  });
});

app.use("/api/users", userRoutes);

module.exports = app;