import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import { StoreContext } from '../../context/StoreContext'
import SidebarWidgetList from '../../SidebarWidgetList/SidebarWidgetList'
import AddWidgetForm from '../AddWidgetForm/AddWidgetForm'

const Sidebar = ({setShowSidebar, menu}) => {
    const [sidebarMenu, setSidebarMenu] = useState('CSPM')
    const {widgetItems, categories, addWidget, removeWidget, addNewWidget, calculateWidgetId} = useContext(StoreContext)
    
    const [checkedIds, setCheckedIds] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newWidget, setNewWidget] = useState({
        id: 0,
        widget_name: '',
        widget_text: '',
    })

    const handleCheckboxCheck = (e) => {
        const {value, checked} = e.target;

        if (checked) {
            setCheckedIds((prev) => [...prev, value])
        } else {
            setCheckedIds((prev) => prev.filter((checkedId) => checkedId != value))
        }
    }

    useEffect(() => {
        console.log(menu);
        if (menu != null) {
            setSidebarMenu(menu);
        }
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addWidget(checkedIds);
    }

    const handleInputChange = (event) => {
        setNewWidget((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        addNewWidget(newWidget, sidebarMenu)
        
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
            {!showAddForm ? <button onClick={() => setShowAddForm(true)} className='confirm-btn'>Add</button> : <></>}
            {
                showAddForm ? 
                <form onSubmit={handleSubmit} className="sidebar-widget-add-form">
                    <p onClick={() => setShowAddForm(false)}>X</p>
                    <input onChange={handleInputChange} name='widget_name' value={newWidget.widget_name} type="text" placeholder='widget name' />
                    <input onChange={handleInputChange} name='widget_text' value={newWidget.widget_text} type="text" placeholder='widget text' />
                    <button className='confirm-btn toggle'>Add</button>
                </form> : <></>
            }
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