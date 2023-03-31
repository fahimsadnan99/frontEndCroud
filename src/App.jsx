import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Outlet></Outlet>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App