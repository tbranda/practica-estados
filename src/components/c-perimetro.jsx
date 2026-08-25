import { useId } from "react";

export default function CPerimetro( { perimetro, handlePerimetro } ) {
    const id = useId();
    return (
    <div className="flex flex-col gap-1.5 p-2 min-w-24 w-fit">
        <label htmlFor={id}>Perimetro:</label>
        <input 
            type="number" 
            name="perimetro" 
            id={id} 
            placeholder="6.28" 
            className="border rounded p-0.5" 
            value={perimetro}
            onChange={(e) => handlePerimetro(e.target.value)}
        />
    </div>
    ); 
}