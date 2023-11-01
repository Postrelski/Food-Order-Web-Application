import "./styles/CartScreen.css"
import { useState } from "react";

function CartScreen(props) {

  let total = 0;
  props.cartArray.map(item => (
    total += (item.quantity * item.price)
  ))

  function modifyQuantityAddHandler (e) {
    props.modifyQuantityAdd(e.target.id)
  }

  function modifyQuantitySubHandler (e) {
    props.modifyQuantitySub(e.target.id)
  }

  let itemsNum = 0;
  props.cartArray.map(item => (
    itemsNum += (item.quantity)
  ))


  const modalOn = props.modal;

  // this should happen if 'CART' button is clicked
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

  function switchModal (){
    props.modalFunction()
  }

  return (
    <>
      <div className={backdrop} onClick={switchModal}> </div>
      <div className={modal_style}>
        <h2>Your Cart</h2>
        <div className="cart_items_container">
          {props.cartArray.map(item => (
            <div key={item.id} id = {item.id}>
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
        <div className="total">{total}</div>
        <div className="cartBTNS">
          <button onClick={switchModal}>Close</button>
          <button>Check Out</button>
        </div>
      
      </div>
    </>
    
  );
}

export default CartScreen;
