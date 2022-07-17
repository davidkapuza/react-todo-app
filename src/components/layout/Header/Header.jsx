import randomUserIcon from "utils/randomUserIcon";
import { memo } from "react";
import './header.scss';

const Header = memo((props) => {
  return <header>
    <a href="./" className="user-avatar"><img src={randomUserIcon} alt="user-avatar"></img></a>
    {props.children}
  </header>;
})

export default Header;