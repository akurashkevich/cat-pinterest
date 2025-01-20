export default function CatCard( {id, url, ref}: { id: string; url: string, ref: any }) {
    return (
        <img ref={ref} className="card" key={id} src={url} alt="Cat image" />
    )
}