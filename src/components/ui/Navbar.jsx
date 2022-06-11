import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/typex';

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );

    const navigate = useNavigate();
    const handleLogout = () => {

        dispatch({
            type: types.logout
        });
        localStorage.removeItem('user');

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
            <span>{ user.name }</span>
            <button 
                className="nav-item nav-link btn text-white" 
                type="button" 
                onClick={ handleLogout }>
                Logout
            </button>
        </nav>
)
}