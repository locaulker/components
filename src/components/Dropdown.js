import React, { useState, useEffect } from "react"
import { GoChevronDown } from "react-icons/go"
// import { GoChevronLeft } from "react-icons/go"
import Panel from "./Panel"

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = event => {
      console.log(event.target)
    }

    document.addEventListener("click", handler, true)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = option => {
    // To Close the Dropdown
    setIsOpen(false)

    // To pass the option that the user clicked on
    onChange(option)
  }

  const renderedOptions = options.map(option => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    )
  })

  /**
   *  // long hand
   * let content = "Select..."
   * if (value) {
   *  content = value.label
   *  }
   *
   * // Short hand (Concise)
   * {value?.label || "Select..."}
   */
  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
