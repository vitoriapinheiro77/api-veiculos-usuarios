# API Veículos e Usuários

Projeto desenvolvido utilizando Node.js, Express, MySQL, MongoDB e Docker.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- MongoDB
- Mongoose
- Docker
- Docker Compose

---

## Estrutura do Projeto

```
api-veiculos-usuarios/
│
├── src/
│   ├── config/
│   │   ├── mongodb.js
│   │   └── mysql.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   └── app.js
│
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
└── server.js
```

---

## Configuração do Ambiente

### Arquivo .env

Crie um arquivo `.env` na raiz do projeto:

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

---

## Executando com Docker

### Construir as imagens

```bash
docker compose build
```

### Iniciar os containers

```bash
docker compose up
```

Ou:

```bash
docker compose up -d
```

---

## Containers Criados

### API

- Porta: 3000

### MySQL

- Porta interna: 3306
- Banco: api_db

### MongoDB

- Porta interna: 27017

---

## Testando a API

Após iniciar os containers:

```bash
http://localhost:3000
```

Retorno esperado:

```json
{
  "mensagem": "API funcionando"
}
```

---

## Modelo de Usuário

Atualmente o sistema possui a entidade User.

Campos:

| Campo | Tipo |
|---------|---------|
| id | Integer |
| nome | String |
| email | String |
| senha | String |

O modelo é criado automaticamente pelo Sequelize ao iniciar a aplicação.

---

## Comandos Docker Úteis

### Ver containers ativos

```bash
docker ps
```

### Ver logs da API

```bash
docker logs api-veiculos
```

### Ver logs do MySQL

```bash
docker logs mysql-api
```

### Ver logs do MongoDB

```bash
docker logs mongo-api
```

### Parar os containers

```bash
docker compose down
```

---

## Status Atual do Projeto

Funcionalidades implementadas:

- Estrutura inicial da API
- Configuração do Express
- Integração com MongoDB
- Integração com MySQL
- Docker Compose configurado
- Modelo User criado
- Endpoint de teste da API

Endpoint disponível:

```http
GET /
```

Resposta:

```json
{
  "mensagem": "API funcionando"
}
```

---
