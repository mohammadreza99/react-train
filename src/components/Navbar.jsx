import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React JS</Link>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/counter">Counter</NavLink>

                            {/* another way to show the active link */}
                            {/*<NavLink*/}
                            {/*    className="nav-link"*/}
                            {/*    style={({isActive}) => (isActive ? {color: 'blue'} : {})}*/}
                            {/*    to="/counter">Counter </NavLink>*/}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/todo">Todo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
