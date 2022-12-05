import React, { useState } from "react"
import { GoChevronDown } from "react-icons/go"
import { GoChevronLeft } from "react-icons/go"

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

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
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown
