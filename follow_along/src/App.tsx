import userService, { User } from "./services/user-service";
import { useUsers } from "./hooks/useUsers";


const App = () => {

  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id != user.id))

    const { request } = userService.delete<User>(user)
    request
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

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
