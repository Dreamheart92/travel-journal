import { Outlet } from 'react-router-dom';
import AccountLayout from '../../layouts/AccountLayout';
import Sidebar from '../../components/Sidebar';
import SidebarSection from '../../components/Sidebar/SidebarSection';
import NavigationLink from '../../components/NavigationLink';
import { ACCOUNT_SUB_PATHS, PATHS } from '../../constants/paths';
import style from './index.module.css';

export default function Account() {
  const contentHeading = 'My Account';

  return (
    <AccountLayout>
      <Sidebar width="fit-content">
        <SidebarSection heading="My Account">

          <NavigationLink to={PATHS.ACCOUNT} end>
            My Account
          </NavigationLink>

          <NavigationLink to={ACCOUNT_SUB_PATHS.EDIT_PROFILE}>
            Edit Profile
          </NavigationLink>
        </SidebarSection>

        <SidebarSection heading="Journals">
          <NavigationLink to={ACCOUNT_SUB_PATHS.MY_JOURNALS}>
            My Journals
          </NavigationLink>
        </SidebarSection>
      </Sidebar>

      <div className={style.content}>
        <h3>{contentHeading}</h3>
        <Outlet />
      </div>
    </AccountLayout>
  );
}
