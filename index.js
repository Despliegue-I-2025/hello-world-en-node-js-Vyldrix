import { createServer } from 'http';

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

res.end('Hola Mundo\n');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});