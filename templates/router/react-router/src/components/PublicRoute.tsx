import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store';

type PublicRouteProps = {
    children: React.ReactNode;
    redirectTo?: string;
};

export function PublicRoute({
    children,
    redirectTo,
}: PublicRouteProps) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to={redirectTo ?? '/'} replace />;
    }

    return children;
}