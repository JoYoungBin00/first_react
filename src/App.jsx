import Card from "./components/Card";
import ProductCard from "./components/ProuductCard";
import './App.css'

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH"
  };

  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" }
  ];
  // const productList=products.map(p=><Card name={product.name} price={product.price} brand={product.brand} />)
  return (
    
    <>
    <div>
      <Card name={product.name} price={product.price} brand={product.brand} />
      {products.map((item) => (
        <ProductCard key={item.id} name={item.name} price={item.price} brand={item.brand} />
      ))}
    </div>
    </>
  );
}

export default App;
