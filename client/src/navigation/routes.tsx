import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/page'
import Jobs from '../pages/jobs/page'
import Login from '../pages/login/page'
import Register from '../pages/register/page'
import JobDetail from '../pages/job detail/page'

const routes = [
  {
    id: 0,
    path: '/',
    element: <Home/>
  },
  {
    id: 1,
    path: '/login',
    element: <Login/>
  },
  {
    id: 3,
    path: '/register',
    element: <Register/>
  },
  {
    id: 4,
    path: '/jobs',
    element: <Jobs/>
  },
  {
    id: 5,
    path: '/jobDetails',
    element: <JobDetail/>
  }
]

const Routing = () => {
  return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                  <Route key={route.id} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </BrowserRouter>
  )
}
export default Routing
