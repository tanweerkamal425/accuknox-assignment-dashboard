import React, {useContext, useState} from 'react'
import './Widget.css'
import Donut from './Donut'
import { Chart } from 'chart.js/auto'
import { Bar, Doughnut } from 'react-chartjs-2'
import { StoreContext } from '../../context/StoreContext'

const Widget = ({widget}) => {
    const {removeWidget} = useContext(StoreContext);
    // const [data, setData] = useState({
    //     labels: [
    //         'Connected',
    //         'Not connected',
    //       ],
    //       datasets: [{
    //         label: 'My First Dataset',
    //         data: [50, 50],
    //         backgroundColor: [
    //           'rgb(255, 99, 132)',
    //           'rgb(54, 162, 235)',
    //           'rgb(255, 205, 86)'
    //         ],
    //         hoverOffset: 4
    //       }]
    // })

    return (
      <div className="widget">
        <div className="widget-header">
          <p className="widget-title">{widget.widget_name}</p>
          <i onClick={() => removeWidget(widget.id)} className="fa-solid fa-xmark"></i>
        </div>
          <Donut />
      </div>
    )
}

export default Widget