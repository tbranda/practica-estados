import { useId } from "react";

export default function CRadio( { radio, handleRadio } ) {
    const id = useId();
    return (
    <div className="flex flex-col gap-1.5 p-2 max-w-24">
        <label htmlFor={id}>Radio:</label>
        <input 
            type="number" 
            name="r" 
            id={id} 
            placeholder="2" 
            className="border rounded p-0.5" 
            value={radio}
            onChange={(e) => handleRadio(e.target.value)}
        />
    </div>
    ); 
}