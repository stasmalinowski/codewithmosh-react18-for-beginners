import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

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
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border" role="status"></div>}
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
