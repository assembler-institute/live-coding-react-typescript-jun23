import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/authContext'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

  const { isLogged } = useContext(AuthContext);

  return isLogged ? children : <Navigate to={"/login"} />
}

export default PrivateRoutes