import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

  const auth = localStorage.getItem("Loggedin");

  return (
    auth ? <Outlet/> : <Navigate to={"/Login"} />
  )
}

export default ProtectedRoutes

