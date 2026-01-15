import { Login } from '@/modules/auth/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/login')({
    component: () => <Login />,
})