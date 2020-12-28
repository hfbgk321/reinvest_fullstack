import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

// class DonutChart extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             labels: ['Mortgage', "Taxes","Insurance","Variable expense","Fixed expenses"],
//             datasets: [{
//                 data: ['1540', '329', '75', '295', '0'],
//                 backgroundColor: ['red', 'blue', 'green', 'yellow', 'pink']
//             }]
//         }
//     }

//     render() {
//         return (
//              <div>
//                  <Doughnut
//                     // options={cutoutPercentage= 70}
//                     data={{
//                         labels: this.state.labels,
//                         datasets: this.state.datasets
//                     }}
//                     width="250" height="250"
//                  />
//              </div>
//         );
//     }
// }

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
    cutoutPercentage: 75,
}

const styles = {
    graphContainer: {
      border: '1px solid #bfbfbf',
      padding: '15px',
      width: '100%'
    }
  }

function MonthlyExpenseDonut(props) {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       data: DonutChartdata(props)
    //     }
    // }
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