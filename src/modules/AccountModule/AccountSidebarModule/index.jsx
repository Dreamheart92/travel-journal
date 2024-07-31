import { useSelector } from 'react-redux';
import NavigationLink from '../../../components/NavigationLink';
import { ACCOUNT_SUB_PATHS } from '../../../constants/paths';
import Sidebar from '../../../components/Sidebar';
import UserProfileImage from '../../../components/UserProfileImage';
import { selectUser } from '../../../store/auth/selectors';
import style from './index.module.css';
import useAuth from '../../../hooks/useAuth';

export default function AccountSidebarModule() {
  const user = useSelector(selectUser);
  const auth = useAuth();

  return (
    <Sidebar width="fit-content">
      <div className={style.container}>
        <div className={style.user}>
          <UserProfileImage imageUrl={user.imageUrl} />

          <div>
            <p>{user.username}</p>
          </div>

          <p>{user.email}</p>
        </div>

        <div className={style.navigation}>
          <NavigationLink account to={ACCOUNT_SUB_PATHS.EDIT_PROFILE}>
            Edit Profile
          </NavigationLink>

          <NavigationLink account to={ACCOUNT_SUB_PATHS.MY_JOURNALS}>
            My Journals
          </NavigationLink>

          <NavigationLink
            onClick={auth.logout}
            account
            to=""
          >
            Sign out
          </NavigationLink>
        </div>
      </div>
    </Sidebar>
  );
}
