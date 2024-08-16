import { createContext, useState } from "react";
import categories from '../../data.json';;

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [widgetItems, setWidgetItem] = useState([]);

    const addWidget = (widgetIds) => {
        setWidgetItem([]);
        setWidgetItem([...widgetIds])
    }

    const removeWidget = (widgetId) => {
        setWidgetItem((prev) => prev.filter((id) => id != widgetId))
    }


    const contextValue = {
        categories,
        widgetItems,
        addWidget,
        removeWidget,
        setWidgetItem
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider