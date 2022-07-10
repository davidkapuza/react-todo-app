import React from "react";
import { Icon } from "components";
import './secondaryButton.scss';

function SecondaryButton({ children, icon, size, color, ...props }) {
  return <button {...props} className={`secondary ${size} ${color}`} type="button">
    {children}
    <Icon>{icon}</Icon>
  </button> 
}

export default SecondaryButton;