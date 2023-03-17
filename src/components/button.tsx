export default function Button() {
    function Booom() {
        throw new Error("Boooom!");
        return <div></div>;
    }

    return (
        <div>
            <button>Click</button>
            <Booom />
        </div>
    );
}
