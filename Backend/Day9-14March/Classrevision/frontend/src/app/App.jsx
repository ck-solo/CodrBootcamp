import React from 'react'
import { RouterProvider } from 'react-router'
import { AuthProvider } from '../auth.context'
import { router } from './routes/app.route'


function App() {
  return (
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  )
}

export default App
