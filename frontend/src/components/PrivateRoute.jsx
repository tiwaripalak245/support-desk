import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {


   const {isLoggedIn, checkStatus} = useAuthStatus()

   if (checkStatus) {
    return(
        <div className="container p-5 text-center">
            <h1 className='text-3xl text-slate-800'>Loading...</h1>
        </div>
    )
   }

   return isLoggedIn ? <Outlet/> : <Navigate to={'/login'}/>
}

export default PrivateRoute
