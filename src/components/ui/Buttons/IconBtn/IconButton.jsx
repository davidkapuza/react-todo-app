import { Icon } from "components";
import "./iconButton.scss";

function IconButton({ icon, size, color, ...props }) {
  return <button {...props} className={`icon-btn ${size} ${color}`} type="button">
  <Icon>{icon}</Icon>
</button>
}

export default IconButton;