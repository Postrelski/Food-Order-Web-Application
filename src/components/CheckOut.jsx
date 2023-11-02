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
    props.clearCart();
    setThankYou(true);
  }


  return ( 
    <div className={props.modal_style}>
        {!thankYou && <div>
          <h2>Checkout</h2>
          <p>Total Amount: ${props.total}</p>
          <form>
            <label for="fname">Full name:</label><br/>
            <input type="text" id="fname" name="fname" /><br/>
            <label for="email">Email:</label><br/>
            <input type="text" id="email" name="email" /><br/>
            <label for="street">Street:</label><br/>
            <input type="text" id="street" name="street" /><br/>
            <label for="postal">Postal Code:</label><br/>
            <input type="text" id="postal" name="postal" /><br/>
            <label for="city">City:</label><br/>
            <input type="text" id="city" name="city" /><br/>
            <div className="check_out_btns">
              <button onClick={switchModal}>Close</button>
              <input onClick= {submitHandler} type="submit" value="Submit"></input>  
            </div>
          </form>
        </div>}
      {thankYou && <ThankYou modalFunction={switchModal}  />}
    </div>
  );
}

export default CheckOut;
