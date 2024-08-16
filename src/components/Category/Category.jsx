import React, { useContext } from 'react'
import './Category.css'
import Widget from '../Widget/Widget'
import { StoreContext } from '../../context/StoreContext'

const Category = ({category, setShowSidebar, setSidebarMenu, searchInput}) => {
    const {widgetItems} = useContext(StoreContext);

    const handleClick = () => {
        setSidebarMenu(category.type);
        setShowSidebar(true);
    }

    return (
        <div className="category">
            <div className="category-title">{category.category_name}</div>
            <div className="widget-list">
                {
                    category.widgets.map((widget, idx) => {
                        if (widgetItems.includes(String(widget.id))) { 
                            return <Widget key={idx} widget={widget} />
                        }
                        return null 
                    })
                }
                <div className="add-widget">
                    <button onClick={handleClick} className="widget-button">+Add Widget</button>
                </div>
            </div>
        </div>
    )

}

export default Category