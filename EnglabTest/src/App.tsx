import React from "react";
import data from "../data.json";
import { Unit } from "./Unit";
import UnitDataContainer from "./UnitDataContainer";
import "./index.css";

const UnitList: React.FC<{ units: Unit[] }> = ({ units }) => {
  return (
    <div className='image-grid'>
      {units.map((unit, index) => UnitDataContainer(unit, index))}
    </div>
  );
};

const App: React.FC = () => {
  const units: Unit[] = data.unitData;
  return (
    <>
      <section>
        <div className='center'>
          <img
            src='Image/form.png'
            className='inlineImage'
            alt='googleFormImage'
          />
          <h1>CHOOSE THE EXAM YOU WANT TO TEST! </h1>
        </div>
        <UnitList units={units} />
      </section>
    </>
  );
};

export default App;
