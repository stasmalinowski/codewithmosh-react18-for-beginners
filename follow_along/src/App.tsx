import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setError("");
      } catch (err) {
        setError((err as AxiosError).message);
      }
    })();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {!error &&
          users?.map((u) => (
            <li key={u.id}>
              Id: {u.id}, Name: {u.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
