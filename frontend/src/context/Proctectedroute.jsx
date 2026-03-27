import { Navigate } from 'react-router-dom';
import { useAuthcontext } from '../hooks/useAuthcontext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuthcontext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin-dashboard" />;
    if (user.role === 'employee') return <Navigate to='/employee-dashboard' />;
    if (user.role === 'security') return <Navigate to="/security-dashboard" />;
    return <Navigate to="/" />
  }

  return children;
};

export default ProtectedRoute;