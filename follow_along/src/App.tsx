import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";


const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id != user.id))

    const { request } = userService.deleteUser(user)
    request
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  useEffect(() => {
    setIsLoading(true)

    const { request, cancel } = userService.getAllUsers()
    request 
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

    return () => cancel();
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
