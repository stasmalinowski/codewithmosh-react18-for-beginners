import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import axios from "axios";

interface User{
  id: number,
  name: string
}

const App = () => {

  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState<string>("")

  useEffect(() => {
    axios.get<User[]>("https://jsonplxxxaceholder.typicode.com/users")
      .then( res => setUsers(res.data))
      .catch( err => setError(err.message) )
  }, [])
  
  return (
  <>
    <p className="text-danger">{error}</p>
    <ul>
      {users?.map( u => <li key={u.id}>Id: {u.id}, Name: {u.name}</li> )}
    </ul>
  </>
    );
  
};

export default App;
