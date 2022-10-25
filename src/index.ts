import express from 'express';
import router from './routes';
import cors from 'cors';
require('dotenv').config();

const app = express();

app.use(
  cors({
    exposedHeaders: ['access-control-allow-origin'],
  })
);
app.options('*', cors);

// parse json request body
app.use(express.json({ limit: '50mb' }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/api', router);

app.listen(3000);
