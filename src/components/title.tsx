import TitleFallback from "@/fallbacks/title-fallback";
import { ErrorBoundary } from "react-error-boundary";

export default function Title() {
    function Booom() {
        throw new Error("Boooom!");
        return <div></div>;
    }

    return (
        <ErrorBoundary FallbackComponent={TitleFallback}>
            <p>This is the title</p>
            <Booom />
        </ErrorBoundary>
    );
}
