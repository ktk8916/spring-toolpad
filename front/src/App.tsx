import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Outlet} from 'react-router';
import {ReactRouterAppProvider} from '@toolpad/core/react-router';
import type {Navigation} from '@toolpad/core/AppProvider';

const NAVIGATION: Navigation = [

  {
    title: '대시보드',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: '주문목록',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'goods',
    title: '상품묵록',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'apiDocs',
    title: 'API 문서',
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: "Wincube",
};


export default function App() {

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} >
      <Outlet />
    </ReactRouterAppProvider>
  );
}