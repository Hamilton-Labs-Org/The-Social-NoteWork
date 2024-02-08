import {Navigate, Outlet} from 'react-router-dom';
import {isLoggedInVar} from '../app/cache';

export default function ProtectedRoute({
  isAllowed = isLoggedInVar(),
  redirectTo = '/signin',
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
