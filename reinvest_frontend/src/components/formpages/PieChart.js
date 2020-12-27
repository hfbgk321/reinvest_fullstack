import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends Component {
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
                 <h1>Monthly Expenses</h1>
                 <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}

                 />
             </div>
        );
    }
}

export default PieChart