import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id != user.id))
    axios.delete("https://jsonplaceholder.typicode.comx/posts/" + user.id)
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setError("");
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false)
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <p className="text-danger">{error}</p>
      {isLoading && <div className="spinner-border" role="status"></div>}
      <ul className="list-group">
        {!error &&
          users?.map((u) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={u.id}>
              Id: {u.id}, Name: {u.name}
              <button className="btn btn-outline-danger" onClick={() => deleteUser(u)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
