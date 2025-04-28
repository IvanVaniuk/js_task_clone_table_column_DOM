'use strict';

// write your code here

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = table.rows;
const tbodyRows = tbody.rows;
const copy = [];

function createTableCell(content, isHeader = false) {
  const newCell = document.createElement(isHeader ? 'th' : 'td');

  newCell.textContent = content;

  return newCell;
}

function insertCellBeforeLast(row, cell) {
  row.insertBefore(cell, row.cells[row.cells.length - 1]);
}

for (const elem of tbodyRows) {
  copy.push(elem.cells[1].textContent);
}

for (let i = 0; i < rows.length; i++) {
  const elem = rows[i];
  const isHeader = i === 0 || i === rows.length - 1;
  const newCell = createTableCell(elem.cells[1].textContent, isHeader);

  insertCellBeforeLast(elem, newCell);
}
