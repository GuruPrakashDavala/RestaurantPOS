import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../src/assets/canvasjs.min.js';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }
  title = 'testcharts';
  ngOnInit() {
		let salesChart = new CanvasJS.Chart("salesreport", {
		animationEnabled: true,
		// exportEnabled: true,
		title: {
			text: "Total Sales in England"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 18, label: "Leeds" },
				{ y: 20, label: "Leicester" },
				{ y: 28, label: "London" },
				{ y: 21, label: "Mancester" },
				{ y: 13, label: "Exeter" }
			]
		}]
	});
	salesChart.render();
  
  //Pie Chart
  let pieChart = new CanvasJS.Chart("pieChart", {
		theme: "light2",
		animationEnabled: true,
		// exportEnabled: true,
		title:{
			text: "Sales by Food Category"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 450, name: "Beverages" },
				{ y: 120, name: "Salads" },
				{ y: 300, name: "Main Course" },
				{ y: 800, name: "Starters" },
				{ y: 150, name: "Dessert's" },
				{ y: 150, name: "Side Items"},
				{ y: 250, name: "Others" }
			]
		}]
	});
		
	pieChart.render();


  }
  
}
