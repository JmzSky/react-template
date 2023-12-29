import { RunTimeLayoutConfig } from '@umijs/max'
import type { Settings } from '@ant-design/pro-components';
import ErrorBoundary from './components/ErrorBoundary'
import config from './config';

const LayoutConfig: RunTimeLayoutConfig = () => {
  return {
    ...(config as Partial<Settings>),
    menuDataRender: (menuItems: any) => {
      return menuItems.map((item: any) => {
        return {
          ...item,
          icon:
            typeof item.icon === 'string' && item.icon.indexOf('icon') > -1 ? (
              <i className={`${item.icon}`} />
            ) : (
              item.icon
            ),
        }
      })
    },
    ErrorBoundary,
  }
}

export default LayoutConfig
