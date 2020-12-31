import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function DonutChartdata(props) {
    return{
        labels: ['Monthly Fixed Morgage'],
            datasets: [{
                data: [props.data.monthlyFixedMorgage],
                backgroundColor: ['#57737a']
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

function LoanDetailsDonut(props) {
        return(
            <div style={styles.graphContainer}>
                
                <Doughnut data={DonutChartdata(props)}
                 options={options}
                width="600" height="250"/>
                <div>
                    ${props.data.monthlyFixedMorgage} / Month
                </div>
            </div>  
        )
}

export default LoanDetailsDonut