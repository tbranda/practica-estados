import { cn } from "../utils/cn";

export default function Circle({ r = 1 }) {

    if (r <= 0) return <p className="text-xl text-red-700">No hay circunferencia para este radio</p>

    return (
        <div className={cn("rounded-full border border-red-600 bg-red-500")}
            style={{ width: `${r}px`, height: `${r}px` }}
        >
        </div>
    )

}