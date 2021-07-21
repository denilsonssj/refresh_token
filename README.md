# Refresh Token

## Description

Demo project with jwt authentication and refresh token.

## Tools and Technologies

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org/)

## Getting started

### Installing
Using npm:
```
$ npm install
```
Using yarn:

```
$ yarn
```

### Enviroment variables
Create file called .env and copy below content to him. After replace the content.
```
# Typeorm Config
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=database

# Secret key Config
SECRET_KEY=secret_key

# App Config
PORT=3334
```

## Licence

[MIT](https://github.com/denilsonssj/refresh_token/blob/main/LICENSE)