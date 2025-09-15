import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import { patch } from '@mui/material';

// render - Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - Login
const Login = Loadable(lazy(() => import('pages/auth/Login')))

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Machines = Loadable(lazy(() => import('pages/machines/machines')));
const Devices = Loadable(lazy(() => import('pages/devices/devices')));
const AddDevice = Loadable(lazy(() => import('pages/devices/addDevice')));
const ConfigDevice = Loadable(lazy(() => import('pages/devices/configDevice')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  //element: <DashboardLayout />,
  children: [
    // Ruta de login como principal
    {
      path: '/',
      element: <Login />
    },
    // opcional: si alguien pone /dashboard o /app, recién carga el layout
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
        path: 'dashboard',
        children: [
          {
            path: 'default',
            element: <DashboardDefault />
          }
        ]
        },
        {
          path: 'machines',
          element: <Machines />
        },
        {
          path: 'devices',
          element: <Devices />
        },
        {
          path: 'addDevice',
          element: <AddDevice />
        },
        {
          path: 'configDevice/:id',
          element: <ConfigDevice />
        },
        {
          path: 'typography',
          element: <Typography />
        },
        {
          path: 'color',
          element: <Color />
        },
        {
          path: 'shadow',
          element: <Shadow />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    }
  ]
};

export default MainRoutes;
