import { NavLink } from "react-router-dom";

import { HOME, PREFERENCES } from "../../../../routes";

export default function Header() {

  return (
    <header className="border-b-1 py-3"> 
      <nav className="nav-links">
        <ul className="flex justify-evenly items-center">
          <li className="px-3 py-2 font-semibold">
            <NavLink to={HOME.pathname}>
              {HOME.title}
            </NavLink>
          </li>
          <li className="px-3 py-2 font-semibold">
            <NavLink to={PREFERENCES.pathname}>
              {PREFERENCES.title}
            </NavLink>
          </li>
        </ul>
      </nav>    
    </header>
  );
}
