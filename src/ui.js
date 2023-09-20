import generateCSV from './generate-table.js';

function createUI () {
  // Attach the generateCSV function to the button click event
  document.getElementById('generateCSV').addEventListener('click', generateCSV);
}
export default createUI;
