import React, { useContext } from 'react'
import './Category.css'
import Widget from '../Widget/Widget'
import { StoreContext } from '../../context/StoreContext'

const Category = ({category, setShowSidebar, setSidebarMenu, query}) => {
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
                            if (query.length > 0 && widget.widget_name.toLowerCase().includes(query.toLowerCase()))
                                return <Widget key={idx} widget={widget} />
                            else if (query.length === 0) {
                                return <Widget key={idx} widget={widget} />
                            }
                        }
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