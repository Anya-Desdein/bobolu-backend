const express = require('express')
const app = express()

app.use(express.static('files'));

const registerRoutes = require('./src/routes');
registerRoutes(app);

const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3030;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Bobolu backend listening at http://${host}:${port}`)
});
