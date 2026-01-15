export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p>Page you are looking, doesn't exist.</p>
            <a href="/" className="text-blue-500 underline mt-4">Go Back</a>
        </div>
    )
}
