import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function DonutChartdata(props) {
    return{
        labels: ['Rental Income'],
            datasets: [{
                data: [props.data.grossMonthlyIncome],
                backgroundColor: ['#C9FBFF']
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

function RentalIncomeDonut(props) {
        return(
            <div style={styles.graphContainer}>
                
                <Doughnut data={DonutChartdata(props)}
                 options={options}
                width="600" height="250"/>
                <div>
                    ${props.data.grossMonthlyIncome} / Month
                </div>
            </div>  
        )
}

export default RentalIncomeDonut