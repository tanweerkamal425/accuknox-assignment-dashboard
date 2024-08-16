import React, {useContext, useState} from 'react'
import './Widget.css'
import Donut from './Donut'
import { Chart } from 'chart.js/auto'
import { Bar, Doughnut } from 'react-chartjs-2'
import { StoreContext } from '../../context/StoreContext'

const Widget = ({widget}) => {
    const {removeWidget} = useContext(StoreContext);

    return (
      <div className="widget">
        <div className="widget-header">
          <p className="widget-title">{widget.widget_name}</p>
          <i onClick={() => removeWidget(widget.id)} className="fa-solid fa-xmark"></i>
        </div>
        <p>{widget.widget_text}</p>
          {/* <Donut /> */}
      </div>
    )
}

export default Widget