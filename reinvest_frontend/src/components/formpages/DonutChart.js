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

function DonutChartdata() {
    return{
        labels: ['Mortgage', "Taxes","Insurance","Variable expense","Fixed expenses"],
            datasets: [{
                data: ['1540', '329', '75', '295', '0'],
                backgroundColor: ['#ca2b69', '#453f78', '#759aab', '#faf2a1', '#ffa69e']
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

class DonutChartExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          data: DonutChartdata()
        }
    }
    render(){
        return(
            <div style={styles.graphContainer}>
                <Doughnut data={this.state.data}
                 options={options}
                width="600" height="250"/>
            </div>  
        )
    }
}

export default DonutChartExample