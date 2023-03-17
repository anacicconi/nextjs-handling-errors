import Button from "@/components/button";

export default function PageWithError() {
    return (
        <>
            <p>Page with Error</p>
            <Button />
        </>
    );
}

export function getServerSideProps() {
    return { props: {} };
}
