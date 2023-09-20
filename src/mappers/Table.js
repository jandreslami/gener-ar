import Table from '../entities/Table.js';
export function generateRows (callbackFunction, amountOfRows) {
  const rows = [];
  for (let i = 0; i < amountOfRows; i++) {
    const row = Object.values(callbackFunction());
    rows.push(row);
  }
  return rows;
}

export function mapTable (dataGeneratingCallback, amountOfRows) {
  return new Table(
    Object.keys(dataGeneratingCallback()),
    generateRows(dataGeneratingCallback, amountOfRows)

  );
}
