import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <RouterProvider router={Router}></RouterProvider>
   <Toaster  
   position="top-right"
  reverseOrder={false} />
   </AuthProvider>
    </QueryClientProvider>
  
  </React.StrictMode>,
)
