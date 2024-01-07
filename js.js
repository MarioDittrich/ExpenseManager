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
        legend: { position: 'bottom', maxLines: 4 },
        
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





document.getElementById('startTutorial').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('tutorial').classList.add('step1'); // Add class for step 1
});

document.getElementById('nextStep').addEventListener('click', function() {
    var tutorial = document.getElementById('tutorial');
    if (tutorial.classList.contains('step1')) {
        // Update tutorial content for step 2
        document.querySelector('.tutorial-content h2').textContent = 'Step 2';
        document.querySelector('.tutorial-content p').textContent = 'Click the + icon on the bottom center of the page to add a new expense. It should save them automatically even after closing the app (only works on this device).';
        tutorial.classList.remove('step1'); // Remove step 1 class
        tutorial.classList.add('step2'); // Add step 2 class
    } else if (tutorial.classList.contains('step2')) {
        // Update tutorial content for step 3
        document.querySelector('.tutorial-content h2').textContent = 'Step 3';
        document.querySelector('.tutorial-content p').textContent = 'Now you can add expenses, please input every detail and click "add expense". The expense should appear down below and you will see your total amount.';
        tutorial.classList.remove('step2'); // Remove step 2 class
        tutorial.classList.add('step3'); // Add step 3 class
    } else if (tutorial.classList.contains('step3')) {
        // Update tutorial content for step 4
        document.querySelector('.tutorial-content h2').textContent = 'Step 4';
        document.querySelector('.tutorial-content p').textContent = 'If you have any questions, feedback, suggestions, please contact me under Menu -> Feedback';
        tutorial.classList.remove('step3'); // Remove step 3 class
        tutorial.classList.add('step4'); // Add step 4 class
    } else if (tutorial.classList.contains('step4')) {
        // This is the last step, close the tutorial overlay
        tutorial.parentNode.style.display = 'none'; // Hide the overlay
    } else {
        // Handle further steps or completion
    }
});
