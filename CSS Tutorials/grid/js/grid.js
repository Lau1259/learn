let columns = document.getElementById('grid-columns').value;
let rows = document.getElementById('grid-rows').value;
console.log(columns, rows);

function updateGrid() {
  let columns = document.getElementById('grid-columns').value;
  let rows = document.getElementById('grid-rows').value;
  let grid = document.getElementById('js-tutorial');
  grid.style.gridTemplateColumns=`repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows=`repeat(${rows}, 1fr)`;
  console.log(columns, rows);
}