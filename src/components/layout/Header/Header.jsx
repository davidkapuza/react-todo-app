import randomUserIcon from "utils/randomUserIcon";
import './header.scss';

function Header(props) {
  return <header>
    <a href="./" className="user-avatar"><img src={randomUserIcon} alt="user-avatar"></img></a>
    {props.children}
  </header>;
}

export default Header;