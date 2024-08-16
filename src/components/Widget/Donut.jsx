import React, {useState} from 'react'
import ApexCharts from "apexcharts";
import ReactApexChart from 'react-apexcharts';

const Donut = () => {

    const [state, setState] = useState({
        labels: ['connected', 'not connected'],
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      })
  
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
          </div>
          <div id="html-dist"></div>
        </div>
      );
}

export default Donut