import React from 'react'
import './AddWidgetForm.css'

const AddWidgetForm = () => {
  return (
    <form className="add-widget-form">
      <input type="text" placeholder='Widget name...' />
      <input type="text" placeholder='Widget text...' />
    </form>
  )
}

export default AddWidgetForm