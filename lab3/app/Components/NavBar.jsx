import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Avaible Books</NavLink>
      <NavLink to="/new">Add New Book</NavLink>
    </nav>
  );
}
