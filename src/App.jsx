import Item from "./components/Item";
import Orders from "../backend/data/available-meals.json"
import "./App.css"
import Header from "./components/Header";
import CartScreen from "./components/CartScreen";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  let count = 0;

  // this function is sent to the 'item' component for 'add' button
  function arrayBuilder (props) {
    if (foodItems.find((item) => item.title === props.title)) {
      foodItems.map(item => {
        if (item.title === props.title) {
          item.quantity++;
        }
      })
      setFoodItems ([...foodItems]);
    } else {
      setFoodItems ([
        ...foodItems,
        { title: props.title,
          price: props.price,
          quantity: 1,
          id: props.id,
          key: props.id,
        }
      ])
    }
  }

  // add button for cart menu
  function modifyQuantityAdd(props) {
    foodItems.map(item => {
      if (item.id === props) {
        item.quantity++;
      }
    })
    setFoodItems ([...foodItems]);
  }

  // subtract button for cart menu
  function modifyQuantitySub(props) {
    const arrayWithoutItem = [];

    foodItems.map(item => {
      if (item.id === props && item.quantity > 0) 
          item.quantity--;
    })

    for (let i = 0; i < foodItems.length; i++) {
      if (foodItems[i].quantity !== 0) 
        arrayWithoutItem.push(foodItems[i])
    }
    setFoodItems (arrayWithoutItem);
  }
  
  // find the total quantity for cart number
  foodItems.map(item => (
    count += item.quantity
  ))

  // function to switch on/off the modal
  const [modal, setModal] = useState(false);
  function modalFunction () {
    // console.log('modal function in app js');
    setModal(!modal);
  }

  function clearCart () {
    setFoodItems([]);
  }

  return (
    <>
      <Header
       count= {count}
       modalFunction = {modalFunction}/>
      <div className="items_mainPage">
        {Orders.map(item => (
          <Item
          title={item.name}
          price={item.price}
          description={item.description}
          key = {item.id}
          id = {item.id}
          image={item.image}
          onAddItem = {arrayBuilder}
          count= {count}
          />
        ))}
      </div>
      <CartScreen
        cartArray={foodItems}
        count= {count}
        modifyQuantityAdd = {modifyQuantityAdd}
        modifyQuantitySub = {modifyQuantitySub} 
        modal = {modal} 
        modalFunction = {modalFunction}
        clearCart ={clearCart} />
    </>
  );
}

export default App;
