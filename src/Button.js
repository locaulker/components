import React from "react"
import PropTypes from "prop-types"

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button className="bg-blue-500">{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning or danger is allowed."
      )
    }
  }
}

export default Button