import { Register } from '@/modules/auth/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/register')({
    component: () => <Register />,
})