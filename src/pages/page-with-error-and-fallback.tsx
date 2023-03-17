import Button from "@/components/button";
import PageFallback from "@/fallbacks/page-fallback";
import { ErrorBoundary } from "react-error-boundary";

export default function PageWithErrorAndFallback() {
    return (
        <ErrorBoundary FallbackComponent={PageFallback}>
            <p>Page with Error and Fallback</p>
            <Button />
        </ErrorBoundary>
    );
}

export function getServerSideProps() {
    return { props: {} };
}
