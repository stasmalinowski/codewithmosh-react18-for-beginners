import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import axios from "axios";

interface User{
  id: number,
  name: string
}

const App = () => {

  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then( res => setUsers(res.data))
  }, [])
  
  return (
    <ul>
      {users?.map( u => <li key={u.id}>Id: {u.id}, Name: {u.name}</li> )}
    </ul>
  );
};

export default App;
