import Button from "./Button";
import "./styles/Item.css"

//images/mac-and-cheese.jpg

function Item(props) {
  return (
    <div className="item_container">
      <img src={`../../backend/public/${props.image}`}></img>
      <h2>{props.title}</h2>
      <p className="price">{props.price}</p>
      <p className="description">{props.description}</p>
      <Button/>
    </div>);
}

export default Item;
