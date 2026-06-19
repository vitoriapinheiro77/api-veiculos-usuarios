const User = require("../models/User");
const bcrypt = require("bcryptjs");

const cadastrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await User.create({
      nome,
      email,
      senha: senhaHash
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({
      erro: error.message
    });
  }
};

module.exports = {
  cadastrar
};