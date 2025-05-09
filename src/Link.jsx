import { NavLink } from "react-router-dom";

function Link() {
  const users = [1001, 10002, 10003];
  return (
    <ul>
      <li>
        <NavLink to="/">Control</NavLink>
      </li>
      <li>
        <NavLink to="/Local">Local</NavLink>
      </li>
      <li>
        <NavLink to="/Promise">promise</NavLink>
      </li>
      {users.map((id) => {
        return (
          <li>
            <NavLink to={`UserDetails/:${id}`}> go to user {id}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
export default Link;
