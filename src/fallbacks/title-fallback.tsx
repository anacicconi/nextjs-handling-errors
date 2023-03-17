export default function TitleFallback({
    error,
}: {
    error: Error;
}): JSX.Element {
    // Here we can display a fallback component but also log the client error
    console.error("Rendering Error on the client:", error.message);

    return <p>This is the fallback title</p>;
}
