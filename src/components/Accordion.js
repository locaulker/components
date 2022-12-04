import React, { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  /**
   * 1. Note: Event handler is NOT in the map function
   * 2. Toggling open and close accordion with if statement
   */
  const handleClick = nextIndex => {
    setExpandedIndex(currentExpandedIndex => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  // The map function
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon = (
      <span className="text-2xl text-green-500">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion
