import "../styles/navbar.css"
import { NavLink } from 'react-router-dom';


const Navibar = () => {
    return (
      <>
        <header className="Header">
            <div className="logo_wrapper">
              <NavLink to="/">
                <img
                  className="logo"
                  src="/Palem_logo.png"
                  alt="Palem Organics Logo"
                  style={{height:60, width:180}}
                />
              </NavLink>
              <NavLink to="/">
                <div className="logo_text">A Fair Science Laboratory</div>
              </NavLink>
            </div>

            {/* Navigation Menu */}
            <div className="det">
              <nav className="nav-links">
                <ul>
                  <li>
                  <NavLink  to="/" className={({isActive}) => isActive ? "nav_active": "nav_unactive" }>
                        Home
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/whyPalem" className={({isActive}) => isActive ? "nav_active": "nav_unactive" }>
                        Why Palem Organics
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/servicepage" className={({isActive}) => isActive ? "nav_active": "nav_unactive" }>
                        Services
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/products" className={({isActive}) => isActive ? "nav_active": "nav_unactive" }>
                        Products
                  </NavLink>
                  </li>
                  <li>
                  <NavLink  to="/contactus" className={({isActive}) => isActive ? "nav_active": "nav_unactive" }>
                        Contact Us
                  </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </>
    );
};

export default Navibar;     
        
        
        