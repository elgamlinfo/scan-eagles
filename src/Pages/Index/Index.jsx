import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
window.scrollTo(0, 0)


const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
            <div className='index'>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    limit={3}
                />
                <Outlet />
            </div>
    )
}

export default Index
