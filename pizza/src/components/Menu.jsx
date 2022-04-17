const MenuData = (props) => {
  return (
    <div>
      <p>
        {props.name}: {props.price} {props.currency}
      </p>
    </div>
  );
};

const Menu = (props) => {
  const menu = [
    { id: "1", name: "Margaréta", price: 1360, currency: "Ft" },
    { id: "2", name: "Vegetáriánus ", price: 1570, currency: "Ft" },
    { id: "3", name: "Hawaii", price: 1640, currency: "Ft" },
    { id: "4", name: "Frutti di Mare", price: 1840, currency: "Ft" },
    { id: "5", name: "Pizza Nicoise", price: 2000, currency: "Ft" },
    { id: "6", name: "Vasmacska", price: 2100, currency: "Ft" },
    { id: "7", name: "Frankfurti", price: 1790, currency: "Ft" },
    { id: "8", name: "Bismarck", price: 1790, currency: "Ft" },
    { id: "9", name: "Carbonara", price: 1840, currency: "Ft" },
    { id: "10", name: "Inferno", price: 1640, currency: "Ft" },
  ];

  const toppings = [
    { id: "1", name: "extre sajt", price: 200, currency: "Ft" },
    { id: "2", name: "extra csirkemell", price: 500, currency: "Ft" },
    { id: "3", name: "extra tonhal", price: 500, currency: "Ft" },
    { id: "4", name: "extra kolbász", price: 200, currency: "Ft" },
    { id: "5", name: "extra kelbimbó", price: 200, currency: "Ft" },
    { id: "6", name: "extra brokkoli", price: 300, currency: "Ft" },
    { id: "7", name: "extra gomba", price: 200, currency: "Ft" },
    { id: "8", name: "extra kukorica", price: 200, currency: "Ft" },
    { id: "9", name: "extra jalapeno", price: 500, currency: "Ft" },
    { id: "10", name: "extra sonka", price: 200, currency: "Ft" },
  ];
  return (
    <div className="main-container">
      <div className="Menu">
        <div className="pizzas">
          <h1 id="pizzak">Pizza</h1>
          {menu.map((item) => {
            return (
              <div key={item.id}>
                <MenuData
                  name={item.name}
                  price={item.price}
                  currency={item.currency}
                />
              </div>
            );
          })}
        </div>
        <div className="toppings">
          <h1 id="feltetek">Extra Feltét</h1>
          {toppings.map((item) => (
            <MenuData
              key={item.id}
              name={item.name}
              price={item.price}
              currency={item.currency}
              id="menuFont"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
