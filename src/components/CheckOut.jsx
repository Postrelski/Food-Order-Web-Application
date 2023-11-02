import "./styles/CheckOut.css"
import ThankYou from "./ThankYou";
import { useState } from "react";

function CheckOut(props) {
  const [thankYou, setThankYou] = useState(false);
  
  function switchModal (){
    props.modalFunction()
  }

  function submitHandler (event) {
    event.preventDefault()

    const form_data = new FormData(event.target);
    const customerData = Object.fromEntries(form_data.entries());
    // console.log(customerData)
    // console.log(props.cartArray)

    // ------------------------------
    // Send http request to the "backend"
    // ------------------------------
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: {
          items: props.cartArray,
          customer: customerData
        }
      })
    });
    // ------------------------------------
    // ------------------------------------

    // clear cart and create thank you screen...
    props.clearCart();
    setThankYou(true);
  }

  return ( 
    <div className={props.modal_style}>
        {!thankYou && <div>
          <h2>Checkout</h2>
          <p>Total Amount: ${props.total}</p>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Full name:</label><br/>
            <input required type="text" id="name" name="name" /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input required type="email" id="email" name="email" /><br/>
            <label htmlFor="street">Street:</label><br/>
            <input required type="text" id="street" name="street" /><br/>
            <label htmlFor="postal-code">Postal Code:</label><br/>
            <input required type="text" id="postal-code" name="postal-code" /><br/>
            <label htmlFor="city">City:</label><br/>
            <input required type="text" id="city" name="city" /><br/>
            <div className="check_out_btns">
              <button onClick={switchModal}>Close</button>
              <input type="submit" value="Submit"></input>  
            </div>
          </form>
        </div>}
        {thankYou && <ThankYou modalFunction={switchModal}  />}
    </div>
  );
}

export default CheckOut;
