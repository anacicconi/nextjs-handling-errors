import GlobalFallback from "@/fallbacks/global-fallback";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorBoundary FallbackComponent={GlobalFallback}>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}
