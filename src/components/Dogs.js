import Dog from "./Dog"

function Dogs() {
    return <>
        {[1, 2].map((index) => (
            <Dog key = {index}></Dog>
        ))}
    </>
}

export default Dogs