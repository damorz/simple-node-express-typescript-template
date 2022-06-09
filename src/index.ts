import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${port}`);
});
