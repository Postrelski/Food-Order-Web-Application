import "./styles/CartScreen.css"
import CheckOut from "./CheckOut";
import { useState } from "react";

function CartScreen(props) {

  const [checkOut, setCheckOut] = useState(false)

  // get the total amount of cost
  let total = 0;
  props.cartArray.map(item => (
    total += (item.quantity * item.price)
  ))
  total = (Math.round(total * 100) / 100).toFixed(2);

  // modifies the quantity of items
  function modifyQuantityAddHandler (e) {
    props.modifyQuantityAdd(e.target.id)
  }
  function modifyQuantitySubHandler (e) {
    props.modifyQuantitySub(e.target.id)
  }

  // finds the total number of items and displays in the cart icon
  let itemsNum = 0;
  props.cartArray.map(item => (
    itemsNum += (item.quantity)
  ))

  const modalOn = props.modal;

  // this will happen if 'CART' button is clicked...
  let modal_style = ""
  let backdrop = ""
  if (modalOn) {
    modal_style = "cart_screen_container"
    backdrop = "modal_backdrop"
    document.body.style.overflow = "hidden";
  } else {
    modal_style = "cart_screen_container hidden"
    document.body.style.overflow = "auto";
    backdrop = ""
  }

  // turns the greyed background on
  function switchModal (){
    props.modalFunction()
    setCheckOut(false)
  }

  // removes the cart menu and creates the checkout menu
  function checkOutHandler () {
    setCheckOut(true)
  }

  return (
    <>
      <div className={backdrop} onClick={switchModal}></div>
      {!checkOut && <div className={modal_style}>
        <h2>Your Cart</h2>
        <div className="cart_items_container">
          {props.cartArray.map(item => (
            <div key={item.id} id = {item.id} className="cart_item_wrapper">
              <div className="cart_split">
                <div>
                  <span>{item.title} </span>
                  <span>{item.quantity} x </span>
                  <span>{item.price}</span>
                </div>
                <div className="add_remove_buttons">
                  <button id={item.id} onClick={modifyQuantitySubHandler}>-</button>
                  <span className="item_quantity">{item.quantity}</span>
                  <button id={item.id} onClick={modifyQuantityAddHandler}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total">${total}</div>
        <div className="cartBTNS">
          <button className="closeBTN" onClick={switchModal}>Close</button>
          <button className="checkoutBTN" onClick={checkOutHandler}>Check Out</button>
        </div>
      </div>}
      {checkOut && 
        <CheckOut 
          modalFunction={switchModal}
          modal_style={modal_style}
          total={total}
          clearCart = {props.clearCart}
          />}
    </>
    
  );
}

export default CartScreen;
