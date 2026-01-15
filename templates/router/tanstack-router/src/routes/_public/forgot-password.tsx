import { ForgotPassword } from '@/modules/auth/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/forgot-password')({
    component: () => <ForgotPassword />,
})