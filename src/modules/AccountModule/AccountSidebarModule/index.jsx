import SidebarSection from '../../../components/Sidebar/SidebarSection';
import NavigationLink from '../../../components/NavigationLink';
import { ACCOUNT_SUB_PATHS, PATHS } from '../../../constants/paths';
import Sidebar from '../../../components/Sidebar';

export default function AccountSidebarModule() {
  return (
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
  );
}
