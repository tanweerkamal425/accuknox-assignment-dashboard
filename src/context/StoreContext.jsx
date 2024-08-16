import { createContext, useEffect, useState } from "react";
import data from '../../data.json';;

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [widgetItems, setWidgetItem] = useState([]);
    const [categories, setCategory] = useState([...data]);
    const [widgetId, setWidgetId] = useState(0);
    console.log(categories);

    useEffect(() => {
        console.log(calculateWidgetId())
    }, [])

    const addWidget = (widgetIds) => {
        setWidgetItem([]);
        setWidgetItem([...widgetIds])
    }

    const removeWidget = (widgetId) => {
        setWidgetItem((prev) => prev.filter((id) => id != widgetId))
    }

    const addNewWidget = (widget, type) => {
        let id = calculateWidgetId();
        widget["id"] = id + 1;
        console.log(widget["id"])
        setCategory((prevCategories) =>
                prevCategories.map((category, i) => 
                    type===category.type ? {...category, widgets: [...category.widgets, widget]} : category
                )
            )
    }
    
    const calculateWidgetId = () => {
        let cnt = 0;
        categories.map((category, i) => cnt += category.widgets.length)
        return cnt;
    }


    const contextValue = {
        categories,
        widgetItems,
        addWidget,
        removeWidget,
        setWidgetItem,
        addNewWidget,
        calculateWidgetId
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider