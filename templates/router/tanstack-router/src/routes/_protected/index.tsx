import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/')({
    // Check public files and do the same - this is only template
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Page for authenticated users</div>
}