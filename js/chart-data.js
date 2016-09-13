var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(24, 158, 82, 0.2)",
					strokeColor : "rgba(24, 158, 82, 1)",
					pointColor : "rgba(24, 158, 82, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [200,160,212,180,175,252,230]
				},
				{
					label: "My First dataset",
					fillColor : "rgba(48, 86, 255, 0.2)",
					strokeColor : "rgba(48, 86, 255, 1)",
					pointColor : "rgba(48, 86, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [20,44,70,10,30,15,12]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(255,51,0,0.2)",
					strokeColor : "rgba(255,51,0,1)",
					pointColor : "rgba(255,51,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [180,116,142,170,145,237,218]
				}
			]
		}

	var lineChartData2 = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(24, 158, 82, 0.2)",
					strokeColor : "rgba(24, 158, 82, 1)",
					pointColor : "rgba(24, 158, 82, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [600,480,636,540,525,756,690]
				},
				{
					label: "My First dataset",
					fillColor : "rgba(48, 86, 255, 0.2)",
					strokeColor : "rgba(48, 86, 255, 1)",
					pointColor : "rgba(48, 86, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [60,132,210,30,90,45,36]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(255,51,0,0.2)",
					strokeColor : "rgba(255,51,0,1)",
					pointColor : "rgba(255,51,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [540,348,426,510,435,711,654]
				}
			]
		}

	var lineChartData3 = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(48, 86, 255, 0.2)",
					strokeColor : "rgba(48, 86, 255, 1)",
					pointColor : "rgba(48, 86, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [80,290,320,450,520,600,630]
				},
				{
					label: "My First dataset",
					fillColor : "rgba(24, 158, 82, 0.2)",
					strokeColor : "rgba(24, 158, 82, 1)",
					pointColor : "rgba(24, 158, 82, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [100,200,300,400,500,600,700]
				}
			]
		}
		
	var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [280,250,230,230,230,230,230]
				},
				{
					fillColor : "rgba(24, 158, 82, 0.2)",
					strokeColor : "rgba(24, 158, 82, 0.8)",
					highlightFill : "rgba(24, 158, 82, 0.75)",
					highlightStroke : "rgba(24, 158, 82, 1)",
					data : [293,244,245,157,144,240,210]
				},
				{
					fillColor : "rgba(255,51,0,0.5)",
					strokeColor : "rgba(255,51,0,0.8)",
					highlightFill: "rgba(255,51,0,0.75)",
					highlightStroke: "rgba(255,51,0,1)",
					data : [4,16,8,63,5,10,20]
				}
			]
	
		}

	var barChartData2 = {
			labels : ["Augustus","September","Oktober","November","December"],
			datasets : [
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [40,40,40,40,40]
				},
				{
					fillColor : "rgba(24, 158, 82, 0.2)",
					strokeColor : "rgba(24, 158, 82, 0.8)",
					highlightFill : "rgba(24, 158, 82, 0.75)",
					highlightStroke : "rgba(24, 158, 82, 1)",
					data : [25,8,2,34,35]
				},
				{
					fillColor : "rgba(255,51,0,0.5)",
					strokeColor : "rgba(255,51,0,0.8)",
					highlightFill: "rgba(255,51,0,0.75)",
					highlightStroke: "rgba(255,51,0,1)",
					data : [15,32,38,16,5]
				}
			]
	
		}

	var barChartData3 = {
			labels : ["Augustus","September","Oktober","November","December"],
			datasets : [
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [32000,22000,16000,37000,50000]
				}
			]
	
		}

	var barChartData4 = {
			labels : ["Augustus","September","Oktober","November","December"],
			datasets : [
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [25,20,20,40,60]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Teal"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			
	var doughnutData = [
					{
						value: 300,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},
					{
						value: 100,
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Teal"
					},
					{
						value: 120,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Red"
					}
	
				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart");
	if(chart1){
		chart1 = chart1.getContext("2d");
		window.myLine = new Chart(chart1).Line(lineChartData, {
			responsive: true
		});
	}
	var chart5 = document.getElementById("line2-chart");
	if(chart5){
		chart5 = chart5.getContext("2d");
		window.myLine = new Chart(chart5).Line(lineChartData2, {
			responsive: true
		});
	}
	var chart2 = document.getElementById("bar-chart");
	if(chart2){
		chart2 = chart2.getContext("2d");
		window.myBar = new Chart(chart2).Bar(barChartData, {
			responsive : true
		});
	}	
	var chart3 = document.getElementById("line3-chart");
	if(chart3){
		chart3 = chart3.getContext("2d");
		window.myBar = new Chart(chart3).Line(lineChartData3, {
			responsive : true
		});
	}
	var chart4 = document.getElementById("bar2-chart");
	if(chart4){
		chart4 = chart4.getContext("2d");
		window.myBar = new Chart(chart4).Bar(barChartData2, {
			responsive : true
		});
	}
	var chart6 = document.getElementById("bar3-chart");
	if(chart6){
		chart6 = chart6.getContext("2d");
		window.myBar = new Chart(chart6).Bar(barChartData3, {
			responsive : true
		});
	}
	var chart7 = document.getElementById("bar4-chart");
	if(chart7){
		chart7 = chart7.getContext("2d");
		window.myBar = new Chart(chart7).Bar(barChartData4, {
			responsive : true
		});
	}	
};