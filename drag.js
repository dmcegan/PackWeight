function allowDrop(ev) {
  ev.preventDefault(); //Prevent the default, which is a div cannot be dropped into another div
}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id); //Sets the dragged item's id to be identified as it's being dragged
}
  
function InventoryDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text"); //Get the dragged item's id
  var draggedElement = document.getElementById(data); //Set draggedElement to the dragged div's id
  draggedElement.classList.remove("chart"); //Remove "chart" class from dragged element
  ev.target.appendChild(draggedElement); //Make the dragged element a child of the Inventory div
  for (const child of draggedElement.children) {
    child.classList.remove("chart"); //Remove the "chart" class from the input boxes inside the dragged div
  }
}

function PackingListDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  draggedElement.classList.add("chart"); //Add the "chart" class to the dragged div
  ev.target.appendChild(draggedElement);
  for (const child of draggedElement.children) {
    child.classList.add("chart"); //Add the "chart" class to the input boxes inside the dragged div
  }
}

var counter = 1; //Counter to set unique item ids

function addInput(){ //Adds a draggable div class whenever the add input button in the inventory is pressed
  var newdiv = document.createElement('div'); //Creates a new div element
  newdiv.innerHTML = "<div class='draggable' draggable='true' ondragstart='drag(event)' type='text' id="+counter+"> <input type='text' class='category-input' placeholder='Item Name' onchange='updateChart();'><input type='number' min='0' class='data-input' data-category='Category 1' value='10' onchange='updateChart(); updateTotalWeight();'> <input type='button' value='-' onClick='this.parentNode.remove(); updateChart(); updateTotalWeight();'></div>"; //Set's the new div's code to include a text input, a number input and a 'remove' button
  document.getElementById('inventory').appendChild(newdiv); //Make the new div a child of the 'inventory' div
  counter++; //Increment the counter for the next unique id
}