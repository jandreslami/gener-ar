class Table {
  constructor (headers, rows) {
    this.headers = headers;
    this.rows = rows;
  }

  returnHTMLElement () {
    const tableElement = document.createElement('table');

    this.headers.forEach(header => {
      const headerElement = document.createElement('th');
      headerElement.textContent = header;
      tableElement.appendChild(headerElement);
    });
    this.rows.forEach(row => {
      const rowElement = document.createElement('tr');

      for (const cell of row) {
        const cellElement = document.createElement('td');
        cellElement.textContent = cell;
        rowElement.appendChild(cellElement);
      }

      tableElement.appendChild(rowElement);
    }

    );
    return tableElement;
  }
}

export default Table;
