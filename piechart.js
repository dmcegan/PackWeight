var data, options, chart;
var index = 0;

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
index = 0;

// Draw the chart and set the chart values
function drawChart() {
  data = new google.visualization.DataTable();
  data.addColumn('string', 'Item');
  data.addColumn('number', 'Weight');

  var startingdata = [['Item1', 10], ['Item2', 20], ['Item3', 30]]

  data.addRows(startingdata);

  options = {'width':300, 'height':300, 'legend':'none', chartArea:{left:20,top:20,width:'90%',height:'90%'}};

  // Display the chart inside the <div> element with id="piechart"
  chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function updateChart() {
  var newData = [];
  var dataInputs = document.querySelectorAll('.data-input.chart');
  var categoryInputs = document.querySelectorAll('.category-input.chart');
  
  dataInputs.forEach(function(dataInput, index) {
    var categoryInput = categoryInputs[index];
    newData.push([categoryInput.value, parseFloat(dataInput.value)]);
  });
  
  data = google.visualization.arrayToDataTable([['Item', 'Weight']].concat(newData));
  chart.draw(data, options);
}

function updateTotalWeight() {
  totalweight = 0;
  for (var i = 0; i < data.getNumberOfRows(); i++) {
    totalweight += data.getValue(i, 1);
  }
  roundedtotalweight = totalweight.toFixed(2);
  document.getElementById('totalweight').innerHTML = "Total Weight: " + roundedtotalweight + "     ";
}