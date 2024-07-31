import { Outlet } from 'react-router-dom';
import AccountLayout from '../../layouts/AccountLayout';
import AccountSidebarModule from '../../modules/AccountModule/AccountSidebarModule';
import style from './index.module.css';

export default function Account() {
  const contentHeading = 'My Account';

  return (
    <AccountLayout>
      <AccountSidebarModule />

      <div className={style.content}>
        <h3 className={style['content-heading']}>{contentHeading}</h3>
        <Outlet />
      </div>
    </AccountLayout>
  );
}
