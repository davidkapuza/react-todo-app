import React from "react";
import Icon from "../../Icon/Icon";
import "./primaryButton.scss";

function PrimaryButton({children, icon, size, color, ...props}) {
  return <button {...props} className={`primary ${size}`}>
    <span className={`${size} ${color}`}>{children}</span>
    <Icon >{ React.cloneElement(icon, {className: `svg ${color}`})}</Icon>
  </button> 
}

export default PrimaryButton;
