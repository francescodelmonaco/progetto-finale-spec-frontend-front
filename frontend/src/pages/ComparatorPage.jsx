import { useGlobalContext } from "../contexts/GlobalContext"
import VinylDatasList from "../components/VinylDatasList"

export default function ComparatorPage() {
    const {
        vinyls,
        firstSelectedId,
        setFirstSelectedId,
        secondSelectedId,
        setSecondSelectedId
    } = useGlobalContext();

    const firstVinylToCompare = vinyls.find(v => String(v.id) === firstSelectedId);
    const secondVinylToCompare = vinyls.find(v => String(v.id) === secondSelectedId);

    return (
        <>
            <h1 className="text-center p-3">Confronta i tuoi vinili</h1>
            <div className="d-flex justify-content-between gap-3">
                <VinylDatasList
                    label={"Vinile 1"}
                    selectValue={firstSelectedId}
                    selectChangeValue={e => setFirstSelectedId(e.target.value)}
                    defaultValue={"Seleziona il primo vinile da confrontare"}
                    vinylToCompare={firstVinylToCompare}
                    otherId={secondSelectedId}
                />
                <VinylDatasList
                    label={"Vinile 2"}
                    selectValue={secondSelectedId}
                    selectChangeValue={e => setSecondSelectedId(e.target.value)}
                    defaultValue={"Seleziona il secondo vinile da confrontare"}
                    vinylToCompare={secondVinylToCompare}
                    otherId={firstSelectedId}
                />
            </div>
        </>
    )
}