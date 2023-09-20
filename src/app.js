import express from 'express';
import { engine } from 'express-handlebars';
import { mapTable } from './mappers/Table.js';
import { generateRandomData } from './random-data-generator.js';
import { writeCSV } from './csv-writer.cjs';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.get('/create', (req, res) => {
  const amountOfRows = req.query.amountOfRows;

  const table = mapTable(generateRandomData, amountOfRows);
  console.log(table);
  writeCSV(table, 'sample-data.csv');

  res.render('home', { table });
});
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000);

console.log('Listening on port 3000');
