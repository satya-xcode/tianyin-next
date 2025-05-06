export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <h2>About Layout</h2>
            {children}
        </main>
    )
}