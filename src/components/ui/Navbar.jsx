import { NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login", {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink 
                            className="nav-link" 
                            to="/marvel">
                                Marvel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dc">Dc</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                </ul>
            </div>
            <span>Sergio Hernández</span>
            <button 
                className="nav-item nav-link btn text-white" 
                type="button" 
                onClick={ handleLogout }>
                Logout
            </button>
        </nav>
)
}