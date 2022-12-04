import React, { useState } from "react"

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)

  const renderedOptions = options.map(option => {
    return <div key={option.value}>{option.label}</div>
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
