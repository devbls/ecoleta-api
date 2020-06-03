import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Diego',
    'Brenno',
    'Cleber',
    'Jorge',
    'Carlos'
  ]);
});

app.listen(3333);