import Link from "next/link";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Homepage</p>
            <Link href="/page-with-error" style={{ marginTop: "24px" }}>
                Go to page with Error
            </Link>
            <Link
                href="/page-with-error-and-fallback"
                style={{ marginTop: "24px" }}
            >
                Go to page with Error and Fallback
            </Link>
            <Link
                href="/page-with-error-and-component-fallback"
                style={{ marginTop: "24px" }}
            >
                Go to page with Error and Component Fallback
            </Link>
        </div>
    );
}

export function getServerSideProps() {
    return { props: {} };
}
