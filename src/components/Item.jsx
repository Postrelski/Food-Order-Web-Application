import Button from "./Button";
import "./styles/Item.css"

function Item(props) {
  return (
    <div className="item_container">
      <img src={`../../backend/public/${props.image}`}></img>
      <h2>{props.title}</h2>
      <p className="price">{props.price}</p>
      <p className="description">{props.description}</p>
      <Button 
        title = {props.title}
        price = {props.price}
        description = {props.description}
        onAddItem = {props.onAddItem}
        id = {props.id}
        key = {props.id}
        />
    </div>);
}

export default Item;
