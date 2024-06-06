function allowDrop(ev) {
  ev.preventDefault();
}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
  
function InventoryDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  draggedElement.classList.remove("chart");
  ev.target.appendChild(draggedElement);
  ev.target.appendChild(document.getElementById(data));
  for (const child of draggedElement.children) {
    child.classList.remove("chart");
  }
}

function PackingListDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  draggedElement.classList.add("chart");
  ev.target.appendChild(draggedElement);
  ev.target.appendChild(document.getElementById(data));
  for (const child of draggedElement.children) {
    child.classList.add("chart");
  }
}

var counter = 1;

function addInput(){ //Adds a draggable div class whenever the add input button in the inventory is pressed
  var newdiv = document.createElement('div');
  newdiv.innerHTML = "<div class='draggable' draggable='true' ondragstart='drag(event)' type='text' id="+counter+"> <input type='text' class='category-input' placeholder='Item Name' onchange='updateChart();'><input type='number' min='0' class='data-input' data-category='Category 1' value='10' onchange='updateChart(); updateTotalWeight();'> <input type='button' value='-' onClick='this.parentNode.remove(); updateChart(); updateTotalWeight();'></div>";
  document.getElementById('inventory').appendChild(newdiv);
  counter++;
}