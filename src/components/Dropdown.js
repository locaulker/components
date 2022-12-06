import React, { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go"
// import { GoChevronLeft } from "react-icons/go"
import Panel from "./Panel"

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = event => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handler, true)

    // This is the cleanUp function
    return () => {
      document.removeEventListener("click", handler)
    }
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
    <div ref={divEl} className="w-48 relative">
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
