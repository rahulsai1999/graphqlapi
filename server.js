const express= require("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const initDB = require('./database');

initDB();

const app = express();

app.listen(9000);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.on('error', err => {
  log.error('server error', err)
});


