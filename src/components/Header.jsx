import "./styles/Header.css"

function Header(props) {
  function clickMe () {
    props.modalFunction();
  }

  return <header>
    <div>Logo</div>
    <a className="cart_button" onClick={clickMe}>
      <div>Cart ({props.count})</div>
    </a>
  </header>;
}

export default Header;
