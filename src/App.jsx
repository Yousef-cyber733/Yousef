import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useRoutes } from 'react-router-dom'
import HomePage from './assets/Pages/Home/HomePage'
import Register from './assets/Pages/Register/Register'
import NotFound from './assets/Pages/Notfound/NotFound'

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },




  ])

  return (
    <>
      {routes}
    </>
  )
}

export default App
