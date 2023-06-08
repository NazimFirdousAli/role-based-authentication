import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import DashboardAppPage from './pages/DashboardAppPage';
import LoginPage from './pages/LoginPage';
import Merchant from './pages/Merchant';
import Order from './pages/Order';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import Question from './pages/Question';
import Review from './pages/Review';
import Staff from './pages/Staff';
import Subscription from './pages/Subscription';
import UserPage from './pages/UserPage';
import Withdraw from './pages/Withdraw';

// ----------------------------------------------------------------------
export const authRoutes = {
  admin: ['super_admin'],
  store_owner: ['store_owner'],
  staff_member: ['staff_member']

}
export default function Router() {

  const isAuthenticated = () => {
    const authToken = localStorage.getItem('accessToken');
    return !!authToken;
  };




  const routes = useRoutes([
    {
      path: '/login',
      element: !isAuthenticated() ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: 'dashboard',
      element: isAuthenticated() ? <DashboardLayout /> : <Navigate to="/Login" />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'product', element: <ProductsPage /> },
        { path: 'merchant', element: <Merchant /> },
        { path: 'order', element: <Order /> },
        { path: 'question', element: <Question /> },
        { path: 'review', element: <Review /> },
        { path: 'staff', element: <Staff /> },
        { path: 'subscription', element: <Subscription /> },
        { path: 'withdraw', element: <Withdraw /> },

      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
