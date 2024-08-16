import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { StoreContext } from '../../context/StoreContext'
import SidebarWidgetList from '../../SidebarWidgetList/SidebarWidgetList'

const Sidebar = ({setShowSidebar}) => {
    const [sidebarMenu, setSidebarMenu] = useState('CSPM')
    const {widgetItems, categories, addWidget, removeWidget} = useContext(StoreContext)
    
    const [checkedIds, setCheckedIds] = useState([]);

    const handleCheckboxCheck = (e) => {
        const {value, checked} = e.target;

        if (checked) {
            setCheckedIds((prev) => [...prev, value])
        } else {
            setCheckedIds((prev) => prev.filter((checkedId) => checkedId != value))
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addWidget(checkedIds);
    }

  return (
    <div className="sidebar-container">

        <div className="sidebar">
            <div className="sidebar-top">
                <p className='sidebar-title'>Add Widget</p>
                <p onClick={() => setShowSidebar(false)} className='sidebar-cross'>X</p>
            </div>
            <p>Personalize your dashbaord by adding the following widget</p>
            <ul className='sidebar-menu'>
                <li onClick={() => { setSidebarMenu('CSPM')}} className={sidebarMenu==='CSPM' ? 'active' : ''}>CSPM</li>
                <li onClick={() => { setSidebarMenu('CWPP')}} className={sidebarMenu==='CWPP' ? 'active' : ''}>CWPP</li>
                <li onClick={() => { setSidebarMenu('Image')}} className={sidebarMenu==='Image' ? 'active' : ''}>Image</li>
                <li onClick={() => { setSidebarMenu('Ticket')}} className={sidebarMenu==='Ticket' ? 'active' : ''}>Ticket</li>
            </ul>
            <div className="sidebar-widget-list">
                <form onSubmit={handleFormSubmit} className='widget-form'>
                    {
                        categories.map((c, i) => {
                            if (c['type']===sidebarMenu) {
                                return <SidebarWidgetList checkedIds={checkedIds} handleCheckboxCheck={handleCheckboxCheck} key={i} widgetArr={c.widgets} />
                            }
                        })
                    }
                    <div className='widget-btn'>
                        <button onClick={() => setShowSidebar(false)} className='cancel-btn'>Cancel</button>
                        <button className='confirm-btn'>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Sidebar