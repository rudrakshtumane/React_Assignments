import { navbarItems } from './NavbarItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-[1px] rounded-lg border-red-900">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dynamic Navbar</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;