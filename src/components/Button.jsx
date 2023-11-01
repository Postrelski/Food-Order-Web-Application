import "./styles/Button.css"

function Button(props) {

  function addButtonHanlder() {
    props.onAddItem(props);
  }

  return (
    <button className="add_button" 
      onClick={addButtonHanlder}>Add To Cart
    </button>);
}

export default Button;