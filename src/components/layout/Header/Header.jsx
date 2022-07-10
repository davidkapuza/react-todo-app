import randomUserIcon from "utils/randomUserIcon";
import './header.scss';

function Header() {
  return <header>
    <a href="./" className="user-avatar"><img src={randomUserIcon} alt="user-avatar"></img></a>
  </header>;
}

export default Header;