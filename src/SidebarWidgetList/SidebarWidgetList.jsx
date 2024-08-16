import React, { useContext, useEffect, useState } from 'react'
import './SidebarWidgetList.css'
import { StoreContext } from '../context/StoreContext';

const SidebarWidgetList = ({widgetArr, handleCheckboxCheck, checkedIds}) => {
    const {widgetItems} = useContext(StoreContext);

    return (
        <div>
            {
                widgetArr.map((w, i) => {
                    return <div className='widget-form-input' key={i}>
                        <input defaultChecked={widgetItems.includes(String(w.id))} onChange={handleCheckboxCheck} name={w.widget_name} value={w.id} type="checkbox" id={w.id} />
                        <label htmlFor={w.id}>{w.widget_name}</label>
                    </div>
                })
            }
        </div>
    )
}

export default SidebarWidgetList