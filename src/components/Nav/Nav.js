import "./Nav.css";
import { NavLink, useLocation } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContex";

function Nav() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isLogin = location.pathname === "/login";

  const navLinks = [
    {
      path: "/posts",
      name: "POSTY ",
    },
    {
      path: "/dashboard",
      name: "DASHBOARD ",
    },
    {
      path: "/login",
      name: "LOGIN ",
    },
  ];
  return isLogin ? null : (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#f5e9da" : "#888",
        padding: "1rem",
      }}
    >
      <span>LOGO</span>

      <div className="links">
        {navLinks.map((navLink) => (
          <NavLink
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? "text-yellow font-bold" : "text-gray"
            }
            key={navLink.path}
          >
            {navLink.name}
          </NavLink>
        ))}

        <a href="https://wp.pl">WP.PL</a>
        <button style={{ marginLeft: "1rem" }} onClick={toggleTheme}>
          Zmień motyw
        </button>
      </div>
    </nav>
  );
}

export default Nav;
