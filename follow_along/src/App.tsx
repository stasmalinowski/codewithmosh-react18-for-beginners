import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";

const App = () => {

  const connect = () => console.log("Connecting...")
  const disconnect = () => console.log("Disconnecting...")

  useEffect(() => {
    connect()

    return disconnect
  })
  
  return (
    <div>
      App
    </div>
  );
};

export default App;
