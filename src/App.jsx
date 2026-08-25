import CInput from "./components/c-input";
import Circle from "./components/circle";
import { useState } from "react";

//Formulas areas
const radioToArea = (r) => Math.PI * Math.pow(r, 2);
const areaToRadio = (a) => Math.sqrt(a / Math.PI);

//Formulas radios
const radioToPerimetro = (r) => 2 * Math.PI * r;
const perimetroToRadio = (p) => p / (2 * Math.PI);

//Formulas perimetros
const perimetroToArea = (p) => Math.pow(p,2) / (4 * Math.PI);
const areaToPerimetro = (a) => 2 * Math.PI * (Math.sqrt(a / Math.PI)); ;

function App() {
  const [radio, setRadio] = useState(1);
  const [area, setArea] = useState(radioToArea(radio));
  const [perimetro, setPerimetro] = useState(radioToPerimetro(1));


  const handleArea = (a) => {
    if (a > 0){
      setArea(a);
      setRadio(areaToRadio(a));
      setPerimetro(areaToPerimetro(a));
    } 
  };

  const handleRadio = (r) => {
    if (r > 0) {
      setRadio(r);
      setArea(radioToArea(r));
      setPerimetro(radioToPerimetro(r));
    }
  };

  const handlePerimetro = (p) => {
    if (radio > 0){
      setRadio(perimetroToRadio(p));
      setArea(perimetroToArea(p));
      setPerimetro(p);
    }
  };

  return (
    <>
      <main className="p-3">
        <h1 className="text-2xl mb-2">Circunferencias</h1>
        <CInput value={radio} handleChange={handleRadio} name="radio" label="Radio:" />
        <CInput value={area} handleChange={handleArea} name="area" label="Área:" />
        <CInput value={perimetro} handleChange={handlePerimetro} name="perimetro" label="Perímetro:" />
        <Circle r={radio} />
      </main>
    </>
  )
}

export default App;
