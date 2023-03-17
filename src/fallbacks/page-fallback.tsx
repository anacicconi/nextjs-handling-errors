export default function PageFallback({ error }: { error: Error }): JSX.Element {
    // Here we can display a fallback component but also log the client error
    console.error("Rendering Error on the client:", error.message);

    return <p>Page fallback component</p>;
}
