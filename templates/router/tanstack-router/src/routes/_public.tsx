import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
import { useAuthStore } from '@/store';

export const Route = createFileRoute('/_public')({
    beforeLoad: () => {
        const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

        if (isAuthenticated) {
            throw redirect({ to: '/' });
        }
    },
    component: () => <Outlet />,
});