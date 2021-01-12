var columns = document.getElementById('grid-columns');
var rows = document.getElementById('grid-rows');

columns.addEventListener("input", event => {
  setTimeout(updateGrid(), 1000);
});
rows.addEventListener("input", event => {
  setTimeout(updateGrid(), 1000);
});

function updateGrid() {
  let numCols = columns.value;
  let numRows = rows.value;
  if (numCols > 12) {
    numCols = 12;
    showToast("Sorry, the demo only allows 12 columns.")
    columns.value = numCols;
  }
  if (numRows > 12) {
    numRows = 12;
    showToast("Sorry, the demo only allows 12 rows.")
    rows.value = numRows;
  }
  let grid = document.getElementById('js-tutorial');
  grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
}

function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (toastContainer.childNodes.length > 3) {
    createToast(message, toastContainer, 4500);
  } else {
    createToast(message, toastContainer);
  }
}

//Default delay is 0 so that first 3 execute normally
function createToast(message, container, delay = 0) {
  setTimeout(() => {
    toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = message;
    console.log(container);
    container.appendChild(toast)
    setTimeout(function () {
      console.log(container.childNodes);
      container.removeChild(container.childNodes[1]);
    }, 5000);
  }, delay);
}