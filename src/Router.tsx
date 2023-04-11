import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ContactApp, Login, Register, Landing, NotFound } from './components/screens'

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <Landing/> },
  { path: '/login', element: <Login/> },
  { path: '/register', element: <Register/> },
  { path: '/app', element: <ContactApp/> },
  { path: '/', element: <NotFound/> }
])

export default function Router () {
  return (
    <RouterProvider router={BrowserRouter}/>
  )
}
