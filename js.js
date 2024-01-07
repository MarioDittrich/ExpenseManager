google.charts.load('current', { 'packages': ['corechart'] });

//  draw the pie chart
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Expense', 'Amount'],
        ['Income', 2000],
        ['Outcome', 1200],
        ['Left this month', 800]
    ]);

    var containerWidth = document.getElementById('pieChartContainer').offsetWidth;

    var options = {
        title: 'Expense Overview',
        width: '100%',
        height: 200,
        chartArea: { width: '70%', height: '80%' },
        legend: { position: 'right', alignment: 'center' },
        tooltip: { isHtml: true, textStyle: { color: 'black' } }, // Adjust tooltip options
        slices: {
            0: { offset: 0.1 }, // Optionally adjust the offset of slices for better visibility
            1: { offset: 0.1 },
            2: { offset: 0.1 }
        },
        pieSliceText: 'percentage', // Show only the percentage in the tooltip
        pieSliceTextStyle: { color: 'white', fontSize: 14 } // Adjust the text style for better visibility
    };
    
    
    
    

    var chart = new google.visualization.PieChart(document.getElementById('pieChart'));

    function draw() {
        var container = document.getElementById('pieChartContainer');
        var containerWidth = container.offsetWidth; 

        options.width = containerWidth; 
        chart.draw(data, options);
    }

    // Initial draw
    draw();

    // Redraw on window resize
    window.addEventListener('resize', draw);
}

google.charts.setOnLoadCallback(drawChart);



function drawVerticalBarChart() {
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Month', 'Fixed cost', 'Health', 'Luxury', 'Other'],
        ['3 Months Ago', 300, 200, 500, 250],
        ['2 Months Ago', 350, 180, 600, 300],
        ['Last Month', 400, 220, 650, 280],
        ['This Month', 320, 250, 580, 270]
    ]);

    var containerWidth = document.getElementById('verticalBarChart').offsetWidth;

    var options = {
        title: 'Monthly Expenses by Category',
        legend: { position: 'bottom', maxLines: 3 },
        colors: ['#FFA500', '#4CAF50', '#2196F3', '#FFEB3B'],
        bar: { groupWidth: '75%' },
        isStacked: true,
        vAxis: {
            title: 'Amount',
            minValue: 0
        },
        hAxis: {
            title: 'Months'
        },
        width: '100%',
        height: 400,
        tooltip: { isHtml: true, textStyle: { color: 'black' } }, // Adjust tooltip options
        annotations: { alwaysOutside: true },
        chartArea: { left: '15%', top: 20, right: 20, bottom: 100 } // Adjust chart area for better visibility
    };
    
    

        var chart = new google.visualization.ColumnChart(document.getElementById('verticalBarChart'));

        chart.draw(data, options);
    }

    google.charts.setOnLoadCallback(drawChart);
    window.addEventListener('resize', drawChart);
}

google.charts.setOnLoadCallback(drawVerticalBarChart);



function drawBigPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Expense Category', 'Amount'],
        ['Fixed costs', 800],
        ['Health', 600],
        ['Luxury', 400],
        ['Other', 1000]
       
    ]);

    var options = {
        title: 'Expense Breakdown by Category',
        width: '100%',
        height: 400,
        legend: { position: 'bottom', alignment: 'center' },
        tooltip: { isHtml: true, textStyle: { color: 'black' } }, // Adjust tooltip options
        pieSliceText: 'percentage', // Show only the percentage in the tooltip
        pieSliceTextStyle: { color: 'white', fontSize: 14 } // Adjust the text style for better visibility
    };
    
    

    var bigPieChart = new google.visualization.PieChart(document.getElementById('bigPieChart'));

    bigPieChart.draw(data, options);
    window.addEventListener('resize', function () {
        bigPieChart.draw(data, options);
    });
}


google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawBigPieChart);




// Toggle side menu visibility
document.getElementById('menuButton').addEventListener('click', function() {
    var sideMenu = document.getElementById('sideMenu');

    
    if (sideMenu.style.right === '-250px') {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});




var menuButton = document.getElementById('menuButton');
var sideMenu = document.getElementById('sideMenu');

// Toggle side menu visibility
menuButton.addEventListener('click', function() {
    var sideMenuRight = window.getComputedStyle(sideMenu).getPropertyValue('right');

    
    if (sideMenuRight === '-250px') {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});

// Close side menu
document.getElementById('closeBtn').addEventListener('click', function() {
    sideMenu.style.right = '-250px';
});



// Access the camera when the camera button is clicked
document.getElementById('cameraButton').addEventListener('click', async function() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
       
        // document.body.appendChild(videoElement);
    } catch (error) {
        console.error('Error accessing camera:', error);
        
    }
});



