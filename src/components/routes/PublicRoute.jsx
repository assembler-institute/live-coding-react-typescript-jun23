import React from 'react'

import { useAuthContext } from '../../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicRoute