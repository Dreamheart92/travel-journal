import { useNavigate } from 'react-router-dom';
import NavigationLayout from '../../layouts/NavigationLayout';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import { PATHS } from '../../constants/paths';
import useAuth from '../../hooks/useAuth';

export default function Navigation() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = (event) => {
    event.preventDefault();
    auth.clearUser();
    navigate(PATHS.HOME);
  };

  return (
    <NavigationLayout>
      <Logo />
      <NavigationMenu onLogout={handleLogout} />
    </NavigationLayout>
  );
}
