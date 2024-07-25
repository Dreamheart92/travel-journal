import { useSelector } from 'react-redux';
import UserProfileImage from '../../../components/UserProfileImage';
import { normalizeName } from '../../../helpers';

import style from './index.module.css';
import { selectUser } from '../../../store/auth/selectors';

export default function Dashboard() {
  const user = useSelector(selectUser);

  return (
    <div className={style['dashboard-container']}>
      <UserProfileImage imageUrl={user.imageUrl} />

      <div>
        <div className={style.wrapper}>
          <p>Name</p>
          <p>
            {normalizeName(user.firstName)}
            &nbsp;
            {normalizeName(user.lastName)}
          </p>
        </div>

        <div className={style.wrapper}>
          <p>Username</p>
          <p>
            {user.username}
          </p>
        </div>

        <div className={style.wrapper}>
          <p>Email</p>
          <p>
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
