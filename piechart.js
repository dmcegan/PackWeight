var data, options, chart; //Initialise variables for use later
var index = 0;

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
index = 0;

function drawChart() {
  data = new google.visualization.DataTable(); //Create new data table for the values entered into the pie chart
  data.addColumn('string', 'Item');
  data.addColumn('number', 'Weight');

  var startingdata = [['Item1', 10], ['Item2', 20], ['Item3', 30]] //Set the values for the initial data

  data.addRows(startingdata); //Add Initial data to the data table

  //Set options for the pie cart using google charts syntax
  options = {'width':300, 'height':300, 'legend':'none', chartArea:{left:20,top:20,width:'90%',height:'90%'}};

  // Display the chart inside the <div> element with id="piechart"
  chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function updateChart() { 
  var newData = [];
  var dataInputs = document.querySelectorAll('.data-input.chart'); //Identifies all Item value inputs
  var categoryInputs = document.querySelectorAll('.category-input.chart'); //Identifies all Item name inputs
  
  dataInputs.forEach(function(dataInput, index) {  //For each input identified, add the data to the newData[] array
    var categoryInput = categoryInputs[index];
    newData.push([categoryInput.value, parseFloat(dataInput.value)]);
  });
  
  data = google.visualization.arrayToDataTable([['Item', 'Weight']].concat(newData)); //Concatenate the newData[] array to the existing data table
  chart.draw(data, options); //Redraw the pie chart
}

function updateTotalWeight() {
  totalweight = 0; //Reset total weight to 0
  for (var i = 0; i < data.getNumberOfRows(); i++) { //For every row in the data table, add the value to totalweight
    totalweight += data.getValue(i, 1);
  }
  roundedtotalweight = totalweight.toFixed(2); //Round the value to 2 d.p. to eliminate binary floating point errors
  document.getElementById('totalweight').innerHTML = "Total Weight: " + roundedtotalweight + "     "; //Update the totalweight label
}