// assets
import { DashboardOutlined, DeploymentUnitOutlined, BugOutlined } from '@ant-design/icons';
// icons
const icons = {
  DashboardOutlined,
  DeploymentUnitOutlined,
  BugOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'machines',
      title: 'Máquinas',
      type: 'item',
      url: 'machines',
      icon: icons.DeploymentUnitOutlined,
      breadcrumbs: false
    },
    {
      id: 'devices',
      title: 'Dispositivos',
      type: 'item',
      url: 'devices',
      icon: icons.BugOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
