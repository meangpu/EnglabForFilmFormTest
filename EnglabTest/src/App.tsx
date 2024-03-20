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

const DataContainer: React.FC = () => {
  const units: Unit[] = data.unitData;
  return (
    <>
      <section>
        <UnitList units={units} />
      </section>
    </>
  );
};

export default DataContainer;
