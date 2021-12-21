    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
        ['Month',  'Customers'],
        ['10',  165],
        ['11',  135],
        ['12',  157],
        ['13',  139],
        ['14',  136],
        ['15',  165],
        ['16',  135],
        ['17',  157],
        ['18',  139],
        ['19',  136],
        ['20',  165],
        ['21',  135],
        ['22',  157]
      
      ]);

      var options = {
        title : 'Number of daily customer attendants evolution',
        vAxis: {title: 'Number of customers'},
        hAxis: {title: 'Hour'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('chart_div1'));
      chart.draw(data, options);
    }
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Age', 'Hours per Day'],
        ['Child',     75],
        ['Teenager',      45],
        ['Young adults',     75],
        ['Middle-aged adults',      45],
        ['Old-aged adults',     75]
      ]);

      var options = {
        title: 'Customers age'
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Continent', 'Men', 'Women'],
        ['Europe', 8175000, 8008000],
        ['North America', 3792000, 3694000],
        ['South America', 2695000, 2896000],
        ['Asia', 2099000, 1953000],
        ['Oceania', 1526000, 1517000],
        ['Africa', 1526000, 1517000]
      ]);

      var options = {
        title: 'Customers provenance',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Total Customer',
          minValue: 0,
        },
        vAxis: {
          title: 'Continent'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }