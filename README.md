1 - Instalação das bibliotecas

### `yarn`

2 - Configurar o arquivo knexfile.js que é o arquivo de config do ORM.

```javascript
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "kimalovisc",
      database: "crud",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    useNullAsDefault: true,
  },
};
```

3 - Executar as migrations para criar as tabelas no banco de dados.

### `yarn knex migrate:latest`

caso queira voltar as migrations execute:

#### `yarn knex migrate:rollback`

4 - Rodar o servidor.

### `yarn dev:server`
