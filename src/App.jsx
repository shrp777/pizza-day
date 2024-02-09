import "./App.css";

function App() {
  const pizzas = [
    {
      name: "Margherita",
      price: 7
    },
    {
      name: "Quattro Stagioni",
      price: 12
    },
    {
      name: "Regina",
      price: 9
    },
    {
      name: "Capricciosa",
      price: 11
    }
  ];

  return (
    <div className="App">
      <h1>Pizzas</h1>
      <p>Le menu contient {pizzas.length} pizzas</p>

      {pizzas.map((pizza, index) => (
        <p onClick={() => console.log(pizza.price)} key={index}>
          {pizza.name}
        </p>
      ))}
    </div>
  );
}

export default App;
