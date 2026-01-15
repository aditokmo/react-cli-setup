import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store';

type ProtectedRouteProps = {
    children: React.ReactNode;
    redirectTo?: string;
};

export function ProtectedRoute({
    children,
    redirectTo,
}: ProtectedRouteProps) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={redirectTo ?? '/'} replace />;
    }

    return children;
}