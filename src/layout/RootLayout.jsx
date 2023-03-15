import { NavLink, Outlet } from "react-router-dom";
import "../styles/rootlayout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <h1>Proxy Photography</h1>
      <div
        className="categories"
        onClick={() => {
          document.body.style.backgroundImage =
            "linear-gradient(to right, #DECBA4, #3E5151)";
        }}
      >
        <NavLink to="/"></NavLink>

        <NavLink to="Nature">
          <button className="btn">Nature</button>
        </NavLink>

        <NavLink to="Portrait">
          <button className="btn">Portrait</button>
        </NavLink>

        <NavLink to="Weddings">
          <button className="btn">Weddings</button>
        </NavLink>

        <NavLink to="Wildlife">
          <button className="btn">Wildlife</button>
        </NavLink>

        <NavLink to="Babies">
          <button className="btn">Babies</button>
        </NavLink>

        <NavLink to="Pregnant">
          <button className="btn">Pregnancy</button>
        </NavLink>

        <NavLink to="Pets">
          <button className="btn">Pets</button>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
