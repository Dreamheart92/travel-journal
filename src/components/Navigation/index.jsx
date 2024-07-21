import { useNavigate } from 'react-router-dom';
import NavigationLayout from '../../layouts/NavigationLayout';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import { deleteUserDataFromStorage } from '../../helpers/storage';
import { PATHS } from '../../constants/paths';

export default function Navigation() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    deleteUserDataFromStorage();
    navigate(PATHS.HOME);
  };

  return (
    <NavigationLayout>
      <Logo />
      <NavigationMenu onLogout={handleLogout} />
    </NavigationLayout>
  );
}
