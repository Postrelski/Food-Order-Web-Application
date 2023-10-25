import Item from "./components/Item";
import Orders from "../backend/data/available-meals.json"
import "./App.css"
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <div className="items_mainPage">
        {Orders.map(item => (
          <Item
          title={item.name}
          price={item.price}
          description={item.description}
          key={item.id}
          image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
