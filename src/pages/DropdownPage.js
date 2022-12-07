import React, { useState } from "react"
import Dropdown from "../components/Dropdown"

function DropdownPage() {
  // Note: Default selection can be an Object or null
  const [selection, setSelection] = useState(null)

  const handleSelect = option => {
    setSelection(option)
  }

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" }
  ]

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  )
}

export default DropdownPage
