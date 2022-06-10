import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/marvel", {
      replace: true
    });
  }

  return (
    <div className='container-fluid'>
        <h1>LoginScreen</h1>
        <hr />
        <button className="btn btn-primary ml-5"
        onClick={ handleLogin } >
          Login
        </button>
    </div>
  )
}
