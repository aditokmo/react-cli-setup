import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
import { useAuthStore } from '@/store';

export const Route = createFileRoute('/_protected')({
    beforeLoad: ({ location }) => {
        const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

        if (!isAuthenticated) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.href,
                },
            });
        }
    },
    component: () => <Outlet />,
});