import "./styles/Header.css"
import logo from "../assets/logo.jpg"

function Header(props) {
  function clickMe () {
    props.modalFunction();
  }

  return ( 
    <header>
      <div>
        <img className="logo" src={logo}></img>
        <span className="logo_title">REACT MEALS</span>
      </div>
      <a className="cart_button" onClick={clickMe}>
        <div>Cart ({props.count})</div>
      </a>
    </header>
  );
}

export default Header;
