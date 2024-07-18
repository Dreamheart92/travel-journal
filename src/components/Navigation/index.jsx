import NavigationLayout from '../../layouts/NavigationLayout';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';

export default function Navigation() {
  return (
    <NavigationLayout>
      <Logo />
      <NavigationMenu />
    </NavigationLayout>
  );
}
