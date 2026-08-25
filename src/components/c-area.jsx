import { useId } from "react";

export default function CArea( { area, handleArea } ) {
    const id = useId();
    return (
    <div className="flex flex-col gap-1.5 p-2 min-w-24 w-fit">
        <label htmlFor={id}>Área:</label>
        <input 
            type="number" 
            name="area" 
            id={id} 
            placeholder="12.45" 
            className="border rounded p-0.5" 
            value={area}
            onChange={(e) => handleArea(e.target.value)}
        />
    </div>
    ); 
}