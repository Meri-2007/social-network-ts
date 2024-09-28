import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Profile/Dashboard'
import { Settings } from './pages/Settings'

const routes = createBrowserRouter([
  {
    path: '', // начальный путь
    element: <Signup />,
  },
  {
    path: 'login', // страница логина
    element: <Login />,
  },
  {
    path: 'profile', // профиль
    element: <Profile />,
    children: [
      {
        path: '', // по умолчанию загружается Dashboard
        element: <Dashboard />,
      },
      {
        path: 'settings', // маршрут для настроек
        element: <Settings />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
