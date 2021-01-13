var columns = document.getElementById('grid-columns');
var rows = document.getElementById('grid-rows');
var alignType = document.getElementById('align-type');
var alignPos = document.getElementById('align-pos');
var justifyType = document.getElementById('justify-type');
var justifyPos = document.getElementById('justify-pos');
var widthVal = document.getElementById('grid-width-value');
var widthType = document.getElementById('grid-width-type');
var heightVal = document.getElementById('height-value');
var heightType = document.getElementById('height-type');

let gridStyleInput = [columns, rows, alignType, alignPos, justifyType, justifyPos, widthVal, widthType, heightVal, heightType];

var itemWidthVal = document.getElementById('grid-item-width-value');
var itemWidthType = document.getElementById('grid-item-width-type');
var itemHeightVal = document.getElementById('grid-item-height-value');
var itemHeightType = document.getElementById('grid-item-height-type');

let gridItemStyleInput = [itemWidthVal, itemWidthType, itemHeightVal, itemHeightType];

gridItemStyleInput.forEach((inputItem) => {
  inputItem.addEventListener("input", event => {
    setTimeout(updateGridItem(), 1000);
  });
});

gridStyleInput.forEach((inputItem) => {
  inputItem.addEventListener("input", event => {
    setTimeout(updateGrid(), 1000);
  });
});

function updateGrid() {
  let numCols = columns.value;
  let numRows = rows.value;
  let aType = `align-${alignType.value}`;
  let aPos = alignPos.value;
  let jusType = `justify-${justifyType.value}`;
  let jusPos = justifyPos.value;
  let width = `${widthVal.value}${widthType.value}`;
  let height = `${heightVal.value}${heightType.value}`;

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
  if (jusType == "justify-content" && justifyPos.length < 5) {
    let spaceAround = document.createElement('option');
    spaceAround.textContent = "space-around";
    spaceAround.value = "space-around";
    let spaceBetween = document.createElement('option');
    spaceBetween.textContent = "space-between";
    spaceBetween.value = "space-between";
    let spaceEvenly = document.createElement('option');
    spaceEvenly.textContent = "space-evenly";
    spaceEvenly.value = "space-evenly";
    justifyPos.appendChild(spaceAround);
    justifyPos.appendChild(spaceBetween);
    justifyPos.appendChild(spaceEvenly);
  } else if (jusType != "justify-content" && justifyPos.length > 4) {
    justifyPos.removeChild(justifyPos[justifyPos.length - 1]);
    justifyPos.removeChild(justifyPos[justifyPos.length - 1]);
    justifyPos.removeChild(justifyPos[justifyPos.length - 1]);
  }
  if (aType == "align-content" && alignPos.length < 5) {
    let spaceAround = document.createElement('option');
    spaceAround.textContent = "space-around";
    spaceAround.value = "space-around";
    let spaceBetween = document.createElement('option');
    spaceBetween.textContent = "space-between";
    spaceBetween.value = "space-between";
    let spaceEvenly = document.createElement('option');
    spaceEvenly.textContent = "space-evenly";
    spaceEvenly.value = "space-evenly";
    alignPos.appendChild(spaceAround);
    alignPos.appendChild(spaceBetween);
    alignPos.appendChild(spaceEvenly);
  } else if (aType != "align-content" && alignPos.length > 4) {
    alignPos.removeChild(alignPos[alignPos.length - 1]);
    alignPos.removeChild(alignPos[alignPos.length - 1]);
    alignPos.removeChild(alignPos[alignPos.length - 1]);
  }
  let grid = document.getElementById('js-grid');
  if (alignType.value == "content" || justifyType.value=="content") {
    grid.style.gridTemplateColumns = `repeat(${numCols}, auto)`;
    grid.style.gridTemplateRows = `repeat(${numRows}, auto)`;
  } else {
    grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  }
  grid.style[aType] = aPos;
  grid.style[jusType] = jusPos;
  grid.style.width = width;
  grid.style.height = height;
}

function updateGridItem() {
  let gridItems = document.querySelectorAll('.grid-item');
  let width = `${itemWidthVal.value}${itemWidthType.value}`;
  let height = `${itemHeightVal.value}${itemHeightType.value}`;
  gridItems.forEach((item) => {
    item.style.width = width;
    item.style.height = height;
  })
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
    container.appendChild(toast)
    setTimeout(function () {
      container.removeChild(container.childNodes[1]);
    }, 5000);
  }, delay);
}