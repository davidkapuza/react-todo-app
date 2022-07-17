import React from "react";
import Icon from "../../Icon/Icon";
import "./primaryButton.scss";

const PrimaryButton = ({children, icon, size, color, className = "", ...props}) => {
  return <button {...props} className={`primary ${size} ${className}`}>
    <span className={`${size} ${color}`}>{children}</span>
    <Icon >{ React.cloneElement(icon, {className: `svg ${color}`})}</Icon>
  </button> 
}

export default PrimaryButton;
