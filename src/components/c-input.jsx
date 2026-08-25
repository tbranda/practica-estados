import { useId } from "react";

export default function CInput( { value, handleChange, name, label } ) {
    const id = useId();
    return (
    <div className="flex flex-col gap-1.5 p-2 min-w-24 w-fit">
        <label htmlFor={id}>{label}</label>
        <input 
            type="number" 
            name={name} 
            id={id} 
            placeholder="6.28" 
            className="border rounded p-0.5" 
            value={value}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>
    ); 
}