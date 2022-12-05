import React, { useState } from "react"

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = option => {
    // To Close the Dropdown
    setIsOpen(false)

    // To pass the option that the user clicked on
    onSelect(option)
  }

  const renderedOptions = options.map(option => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  let content = "Select..."
  if (selection) {
    content = selection.label
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
