import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

// class PieChart extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             labels: ['Mortgage', "Taxes","Insurance","Variable expense","Fixed expenses"],
//             datasets: [{
//                 data: ['1540', '329', '75', '295', '0'],
//                 backgroundColor: ['#ca2b69', '#453f78', '#759aab', '#faf2a1', '#ffa69e']
//             }]
//         }
//     }

//     render() {
//         return (
//              <div>
//                  <h3>Monthly Expenses Breakdown</h3>
//                  <Pie
//                     data={{
//                         labels: this.state.labels,
//                         datasets: this.state.datasets
//                     }}

//                  />
//              </div>
//         );
//     }
// }

function PieChartdata(props) {
    return{
        labels: ['Morgage', 'Taxes', 'Insurance', 'Electricity', 'Gas', 'Water & Sewer', 'HOA fees', 'Garbage', 'Vacancy', 'Maintenance', 'CapEx', 'Management fee'],
            datasets: [{
                data: [props.data.monthlyFixedMorgage, parseFloat((props.data.propertyTaxes / 12).toFixed(2)), parseFloat((props.data.insurance / 12).toFixed(2)), props.data.electricity, props.data.gas ,
                    props.data.waterAndSewer, props.data.hoaFees, props.data.garbage, (props.data.grossMonthlyIncome*(props.data.vacancy/100)), (props.data.grossMonthlyIncome*(props.data.repairsAndMaintenence/100)),
                    (props.data.grossMonthlyIncome*(props.data.capitalExpenditures/100)), (props.data.grossMonthlyIncome*(props.data.managementFees/100))],
                backgroundColor: ['#221a4c', '#2e2468', '#4a39a7', '#a26a16', '#c5811b','#e29728','#e7a94b','#ebba6f', '#9198b6','#a9afc6','#c2c6d6','#d2d5e1', ]
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
      width: '100%',
    }
  }

function expensesBreakdownPie(props) {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       data: DonutChartdata(props)
    //     }
    // }
        return(
            <div style={styles.graphContainer}>
                
                <Pie data={PieChartdata(props)}
                 options={options}
                width="600" height="250"/>
                <div>
                    ${props.data.monthlyFixedMorgage} / Month
                </div>
            </div>  
        )
}
export default expensesBreakdownPie