import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './ui/AppLayout'
import { Dashboard } from '../features/dashboard/dashboard'
import { Patients } from '../features/patient/patients'
import { Login } from '../features/auth/Login'

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'patients', element: <Patients /> },
    ],
  },
])
