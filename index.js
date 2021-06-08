const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const Db = require('./src/db/db');

const db = new Db();
const app = express();

app.use(cors());

app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 20 * 1024 * 1024 },
  abortOnLimit: true,
  responseOnLimit: 'File size limit has been reached (20MB)',
}));

app.use(express.static('files'));

const registerRoutes = require('./src/routes');
registerRoutes(app, db);

const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3030;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Bobolu backend listening at http://${host}:${port}`)
});
