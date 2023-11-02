import "./styles/ThankYou.css"

function ThankYou(props) {
    function modalSwitch () {
        props.modalFunction();
    }
    return (
        <div className="thankyou_container">
            <h1>Sucess!</h1>
            <p>Your order was submitted succesfully.</p>
            <p>We will get back to you with more details via email within the next few minutes...</p>
            <div className="thank_you_BTN_container">
                <button className="thank_you_BTN"onClick={modalSwitch}>Okay</button>
            </div>
        </div>
    );
}

export default ThankYou;
  