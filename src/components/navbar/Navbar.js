import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <div className="logo">
                            <NavLink to="/" className="logo" >
                                <strong>Developer</strong> portfolio
                            </NavLink>
                        </div>
                        <button className="dark-mode-btn">
                            <img src={sun} alt="Light" className="dark-mode-btn__icon" />
                            <img src={moon} alt="Dark" className="dark-mode-btn__icon" />
                        </button>

                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to="/Projects" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/Skills" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Skills
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to="/Contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div >
                </div >
            </nav>
        </div>
    );
}

export default Navbar;