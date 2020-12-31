import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';

function chartData(props) {
  return {
    labels: ['1', '2', '3', '4', '5', '10', '15', '20', '25', '30'],
    datasets: [ {
      label: 'Gross monthly income growth',
      fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 10, y: 60 },
					{ x: 15, y: 58 },
					{ x: 20, y: 59 },
					{ x: 30, y: 53 }]
      
    }]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    border: '1px solid #bfbfbf',
    padding: '15px',
    width: '100%'
  }
}

function LineChartExample(props) {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: chartData()
  //   }
  // }

  // render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart data={this.state.data}
          options={options}
          width="600" height="250"/>
      </div>
    )
  // }
}

export default LineChartExample;