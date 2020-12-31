import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';

function chartData(props) {
  return {
    labels: ['1', '2', '3', '4', '5','6','7','8','9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30'],
    datasets: [ {
      label: 'Monthly Income (growth)',
      fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
      data: [{ x: 1, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),1).toFixed(2)) },
					{ x: 2, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),2).toFixed(2)) },
					{ x: 3, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),3).toFixed(2)) },
					{ x: 4, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),4).toFixed(2)) },
          { x: 5, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),5).toFixed(2)) },
          { x: 6, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),6).toFixed(2)) },
          { x: 7, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),7).toFixed(2)) },
          { x: 8, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),8).toFixed(2)) },
          { x: 9, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),9).toFixed(2)) },
          { x: 10, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),10).toFixed(2)) },
          { x: 11, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),11).toFixed(2)) },
          { x: 12, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),12).toFixed(2)) },
          { x: 13, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),13).toFixed(2)) },
          { x: 14, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),14).toFixed(2)) },
          { x: 15, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),15).toFixed(2)) },
          { x: 16, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),16).toFixed(2)) },
          { x: 17, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),17).toFixed(2)) },
          { x: 18, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),18).toFixed(2)) },
          { x: 19, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),19).toFixed(2)) },
          { x: 20, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),20).toFixed(2)) },
          { x: 21, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),21).toFixed(2)) },
          { x: 22, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),22).toFixed(2)) },
          { x: 23, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),23).toFixed(2)) },
          { x: 24, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),24).toFixed(2)) },
          { x: 25, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),25).toFixed(2)) },
          { x: 26, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),26).toFixed(2)) },
          { x: 27, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),27).toFixed(2)) },
          { x: 28, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),28).toFixed(2)) },
          { x: 29, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),29).toFixed(2)) },
					{ x: 30, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),30).toFixed(2)) }]
    }, {
      label: 'Monthly expense (growth)',
      backgroundColor: 'rgba(21, 255, 0,0.4)',
      borderColor: 'rgb(21, 255, 0)',
      fillColor: 'rgba(21, 255, 0,0.2)',
      data: [{ x: 1, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),1).toFixed(2)) },
					{ x: 2, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),2).toFixed(2)) },
					{ x: 3, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),3).toFixed(2)) },
					{ x: 4, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),4).toFixed(2)) },
          { x: 5, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),5).toFixed(2)) },
          { x: 6, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),6).toFixed(2)) },
          { x: 7, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),7).toFixed(2)) },
          { x: 8, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),8).toFixed(2)) },
          { x: 9, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),9).toFixed(2)) },
          { x: 10, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),10).toFixed(2)) },
          { x: 11, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),11).toFixed(2)) },
          { x: 12, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),12).toFixed(2)) },
          { x: 13, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),13).toFixed(2)) },
          { x: 14, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),14).toFixed(2)) },
          { x: 15, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),15).toFixed(2)) },
          { x: 16, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),16).toFixed(2)) },
          { x: 17, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),17).toFixed(2)) },
          { x: 18, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),18).toFixed(2)) },
          { x: 19, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),19).toFixed(2)) },
          { x: 20, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),20).toFixed(2)) },
          { x: 21, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),21).toFixed(2)) },
          { x: 22, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),22).toFixed(2)) },
          { x: 23, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),23).toFixed(2)) },
          { x: 24, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),24).toFixed(2)) },
          { x: 25, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),25).toFixed(2)) },
          { x: 26, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),26).toFixed(2)) },
          { x: 27, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),27).toFixed(2)) },
          { x: 28, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),28).toFixed(2)) },
          { x: 29, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),29).toFixed(2)) },
					{ x: 30, y: parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),30).toFixed(2)) }]
    },
    {
        label: 'Monthly fixed mortgage',
        backgroundColor: 'rgb(0, 47, 255,0.4)',
        borderColor: 'rgb(0, 47, 255)',
        fillColor: 'rgb(0, 47, 255)',
      data: [{ x: 1, y: props.data.monthlyFixedMorgage},
					{ x: 2, y: props.data.monthlyFixedMorgage},
					{ x: 3, y: props.data.monthlyFixedMorgage },
					{ x: 4, y: props.data.monthlyFixedMorgage },
          { x: 5, y: props.data.monthlyFixedMorgage },
          { x: 6, y: props.data.monthlyFixedMorgage },
          { x: 7, y: props.data.monthlyFixedMorgage },
          { x: 8, y: props.data.monthlyFixedMorgage },
          { x: 9, y: props.data.monthlyFixedMorgage },
          { x: 10, y: props.data.monthlyFixedMorgage },
          { x: 11, y: props.data.monthlyFixedMorgage },
          { x: 12, y: props.data.monthlyFixedMorgage },
          { x: 13, y: props.data.monthlyFixedMorgage },
          { x: 14, y: props.data.monthlyFixedMorgage },
          { x: 15, y: props.data.monthlyFixedMorgage },
          { x: 16, y: props.data.monthlyFixedMorgage },
          { x: 17, y: props.data.monthlyFixedMorgage },
          { x: 18, y: props.data.monthlyFixedMorgage },
          { x: 19, y: props.data.monthlyFixedMorgage },
          { x: 20, y: props.data.monthlyFixedMorgage },
          { x: 21, y: props.data.monthlyFixedMorgage },
          { x: 22, y: props.data.monthlyFixedMorgage },
          { x: 23, y: props.data.monthlyFixedMorgage },
          { x: 24, y: props.data.monthlyFixedMorgage },
          { x: 25, y: props.data.monthlyFixedMorgage },
          { x: 26, y: props.data.monthlyFixedMorgage },
          { x: 27, y: props.data.monthlyFixedMorgage },
          { x: 28, y: props.data.monthlyFixedMorgage },
          { x: 29, y: props.data.monthlyFixedMorgage },
					{ x: 30, y: props.data.monthlyFixedMorgage }]
    },{
      label: 'Profit per Month growth',
      backgroundColor: 'rgb(255, 0, 0,0.4)',
      borderColor: 'rgb(rgb(255, 0, 0)',
      fillColor: 'rgb(rgb(255, 0, 0)',
    data: [{ x: 1, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),1).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),1).toFixed(2)) - props.data.monthlyFixedMorgage},
        { x: 2, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),2).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),2).toFixed(2)) - props.data.monthlyFixedMorgage},
        { x: 3, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),3).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),3).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 4, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),4).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),4).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 5, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),5).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),5).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 6, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),6).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),6).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 7, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),7).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),7).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 8, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),8).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),8).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 9, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),9).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),9).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 10, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),10).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),10).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 11, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),11).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),11).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 12, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),12).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),12).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 13, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),13).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),13).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 14, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),14).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),14).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 15, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),15).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),15).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 16, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),16).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),16).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 17, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),17).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),17).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 18, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),18).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),18).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 19, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),19).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),19).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 20, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),20).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),20).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 21, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),21).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),21).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 22, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),22).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),22).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 23, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),23).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),23).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 24, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),24).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),24).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 25, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),25).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),25).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 26, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),26).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),26).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 27, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),27).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),27).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 28, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),28).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),28).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 29, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),29).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),29).toFixed(2)) - props.data.monthlyFixedMorgage },
        { x: 30, y: parseFloat(props.data.grossMonthlyIncome*Math.pow((1+(props.data.annualIncomeGrowth/100)),30).toFixed(2)) - parseFloat(props.data.totalExpenses*Math.pow((1+(props.data.annualExpensesGrowth/100)),30).toFixed(2)) - props.data.monthlyFixedMorgage }]
  }]
  }
}

const options = {
  scaleShowGridLines: true,
  // scaleGridLineColor: 'rgba(0,0,0,.05)',
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

  // render() {s
    return (
      <div style={styles.graphContainer}>
        <LineChart data={chartData(props)}
          options={options}
          width="600" height="250"/>
      </div>
    )
  // }
}

export default LineChartExample;