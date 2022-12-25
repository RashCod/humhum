import "./App.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Home/Cart/Cart";
import { useState } from "react";
import { Loading } from "./Components/Loading/Loading";

function App() {
  const [isLoading,setIsLoading] = useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },5000)

  return (
    <div>
      {
        isLoading ? <Loading/> :   <div className="wrapper">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
