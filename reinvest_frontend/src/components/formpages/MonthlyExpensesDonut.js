import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function DonutChartdata(props) {
    return{
        labels: ['Expenses'],
            datasets: [{
                data: [props.data.totalExpenses],
                backgroundColor: ['#85BDBF']
            }]
    }
}
const options = {
    cutoutPercentage: 60,
}

const styles = {
    graphContainer: {
      border: '1px solid #bfbfbf',
      padding: '15px',
      width: '100%'
    }
  }

function MonthlyExpenseDonut(props) {
        return(
            <div style={styles.graphContainer}>
                
                <Doughnut data={DonutChartdata(props)}
                 options={options}
                width="600" height="250"/>
                <div>
                    ${props.data.totalExpenses} / Month
                </div>
            </div>  
        )
}

export default MonthlyExpenseDonut