import { Icon } from "components";
import { memo } from "react";
import "./iconButton.scss";

const IconButton = memo(({ icon, size, color, ...props }) => {
  return <button {...props} className={`icon-btn ${size} ${color}`} type="button">
  <Icon>{icon}</Icon>
</button>
})

export default IconButton;