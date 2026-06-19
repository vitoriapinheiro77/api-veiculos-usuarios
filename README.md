# API Veículos e Usuários

## Descrição

Este projeto consiste em uma API desenvolvida em Node.js utilizando Express, Docker, MongoDB e MySQL. O objetivo é fornecer uma estrutura para gerenciamento de usuários e veículos através de uma arquitetura simples baseada em containers.

## Tecnologias Utilizadas

* Node.js
* Express.js
* Docker
* Docker Compose
* MongoDB
* MySQL
* Sequelize
* Mongoose
* JWT
* Dotenv

## Funcionalidades

* Inicialização da API com Express.
* Conexão com banco de dados MongoDB.
* Conexão com banco de dados MySQL utilizando Sequelize.
* Criação automática da tabela de usuários.
* Organização do projeto em camadas.
* Execução completa utilizando Docker Compose.

## Configuração do Ambiente

### Variáveis de Ambiente

Arquivo `.env`:

```env
PORT=3000

JWT_SECRET=minha_chave_super_secreta

MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=api_db

MONGO_URI=mongodb://mongo:27017/api_db
```

## Executando com Docker

### Construir os containers

```bash
docker compose build
```

### Iniciar a aplicação

```bash
docker compose up
```

Ou:

```bash
docker compose up --build
```

### Encerrar os containers

```bash
docker compose down
```

## Serviços Docker

### API

* Porta: 3000

### MySQL

* Banco: api_db
* Usuário: root
* Senha: root

### MongoDB

* Porta padrão: 27017

## Testando a API

Após iniciar os containers, acessar:

```
http://localhost:3000
```

Resposta esperada:

```json
{
  "mensagem": "API funcionando"
}
```

## Modelo de Usuário

A tabela de usuários possui os seguintes campos:

| Campo | Tipo    |
| ----- | ------- |
| id    | Integer |
| nome  | String  |
| email | String  |
| senha | String  |

O campo `email` possui restrição de unicidade.

## Objetivo Acadêmico

Este projeto foi desenvolvido com finalidade acadêmica para praticar:

* Desenvolvimento de APIs REST.
* Integração com bancos de dados relacionais e não relacionais.
* Utilização de Docker e Docker Compose.
* Organização de projetos Node.js.
* Persistência de dados utilizando Sequelize e Mongoose.
