import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layout/home/Home.jsx';
import Signup from './layout/Sign up/Signup.jsx';
import Signin from "./layout/Sign in/Signin.jsx";
import AuthProvider from './Provider/AuthProvider.jsx';
import Dashboard from './layout/dashboard/Dashboard.jsx';
import OwnerDash from './layout/dashboard/owner/OwnerDash.jsx';
import AddHouse from './layout/dashboard/owner/AddHouse.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // owner
      {
        path: "/dashboard/ownerdashboard",
        element: <OwnerDash />,
      },
      {
        path: "/dashboard/addhouse",
        element: <AddHouse />
      },

      // renter
    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
