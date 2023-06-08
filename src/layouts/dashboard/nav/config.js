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
    roles: ['super_admin', 'store_owner'],
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
    roles: ['super_admin'],
  },
  {
    title: 'product',
    path: '/dashboard/product',
    icon: icon('ic_cart'),
    roles: ['store_owner', 'staff'],
  },
  {
    title: 'Subscription',
    path: '/dashboard/subscription',
    icon: icon('ic_blog'),
    roles: ['super_admin'],
  },
  {
    title: 'Merchant',
    path: '/dashboard/merchant',
    icon: icon('ic_user'),
    roles: ['super_admin'],
  },
  {
    title: 'Questions',
    path: '/dashboard/question',
    icon: icon('ic_blog'),
    roles: ['store_owner', 'staff'],
  },
  {
    title: 'Order',
    path: '/dashboard/order',
    icon: icon('ic_user'),
    roles: ['store_owner', 'staff'],
  },
  {
    title: 'Staff',
    path: '/dashboard/staff',
    icon: icon('ic_user'),
    roles: ['store_owner', 'staff'],
  },
  {
    title: 'Withdraw',
    path: '/dashboard/withdraw',
    icon: icon('ic_cart'),
    roles: ['store_owner', 'staff'],
  },
  {
    title: 'Review',
    path: '/dashboard/review',
    icon: icon('ic_blog'),
    roles: ['store_owner', 'staff'],
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
