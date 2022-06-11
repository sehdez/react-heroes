import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/typex';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const path = localStorage.getItem('lastLocation') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: 'SeHdez'
      }
      
    });
      navigate(path, {
        replace: true
      });
   
  }

  return (
    <div  className='container-fluid'>
        <h2 >LoginScreen</h2>
        <hr />
        <button 
          className="btn btn-primary ml-5"
          id='btn'
          onClick={ handleLogin } >
          Login
        </button>
    </div>
  )
}
