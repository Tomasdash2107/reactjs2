export default async function HistoriaItem({props}) {
    const { historia } = props;

    return (
        <div className="HistoriaItem">
            <p>{historia.parrafo1}</p>
            <p>{historia.parrafo2}</p>
            <p>{historia.parrafo3}</p>

        </div>
    )
}
