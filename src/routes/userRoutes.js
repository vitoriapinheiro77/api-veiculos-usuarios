const express = require("express");
const router = express.Router();

const {
  cadastrar
} = require("../controllers/userController");

router.post("/register", cadastrar);

module.exports = router;