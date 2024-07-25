import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../store/auth/selectors';
import { PATHS } from '../constants/paths';

export default function RestrictAuthenticatedGuard({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={PATHS.HOME} />;
  }

  return children;
}
