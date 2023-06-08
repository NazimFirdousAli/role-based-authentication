// component
import { authRoutes } from '../../../routes';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/dashboard/product',
    icon: icon('ic_cart'),
    // authRoutes: authRoutes.staff_member
  },
  {
    title: 'Subscription',
    path: '/dashboard/subscription',
    icon: icon('ic_blog'),
  },
  {
    title: 'Merchant',
    path: '/dashboard/merchant',
    icon: icon('ic_user'),

  },
  {
    title: 'Questions',
    path: '/dashboard/question',
    icon: icon('ic_blog'),
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: icon('ic_user'),
  },
  {
    title: 'Staff',
    path: '/dashboard/staff',
    icon: icon('ic_user'),
  },
  {
    title: 'Withdraw',
    path: '/dashboard/withdraw',
    icon: icon('ic_cart'),
  },
  {
    title: 'Review',
    path: '/dashboard/review',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
