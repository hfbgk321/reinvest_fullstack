import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DonutChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['Mortgage', "Taxes","Insurance","Variable expense","Fixed expenses"],
            datasets: [{
                data: ['1540', '329', '75', '295', '0'],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'pink']
            }]
        }
    }

    render() {
        return (
             <div>
                 <Doughnut
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}

                 />
             </div>
        );
    }
}

export default DonutChart