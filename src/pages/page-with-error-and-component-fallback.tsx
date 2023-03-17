import Title from "@/components/title";

export default function PageWithErrorAndComponentFallback() {
    return (
        <>
            <p>Page with Error And Component Fallback</p>
            <Title />
        </>
    );
}

export function getServerSideProps() {
    return { props: {} };
}
