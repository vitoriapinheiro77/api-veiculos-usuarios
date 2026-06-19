require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/mysql");
const conectarMongo = require("./src/config/mongodb");
const User = require("./src/models/User");

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await conectarMongo();
    console.log("MongoDB conectado");

    // espera 10 segundos
    await new Promise(resolve => setTimeout(resolve, 10000));

    await sequelize.authenticate();
    console.log("MySQL conectado");

    await User.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }
}

iniciarServidor();