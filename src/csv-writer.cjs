function writeCSV (table, path) {
  const createCsvWriter = require('csv-writer').createArrayCsvWriter;
  const csvWriter = createCsvWriter({
    header: table.headers,
    path: path.toString()
  });

  const records = table.rows;

  csvWriter.writeRecords(records) // returns a promise
    .then(() => {
      console.log('...Done');
    });
}

module.exports.writeCSV = writeCSV;
