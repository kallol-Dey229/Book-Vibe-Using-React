import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';
import BookContext from './Context/BookContext.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContext>

    <RouterProvider router={router} />
    <ToastContainer />
    
    </BookContext>
  </StrictMode>,
)
