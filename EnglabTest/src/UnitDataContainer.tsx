import { Unit } from "./Unit";

const UnitDataContainer = (props: Unit, index: number) => {
  return (
    <div key={index}>
      <a href={props.formUrl} target='_blank'>
        <div className='grid-item'>
          <img
            src={props.previewImage}
            width='1280'
            height='720'
            alt={props.unit}
          />
          {/* <img
            src={props.imageFile}
            width='512'
            height='512'
            alt={props.unit}
          /> */}
          <h3>
            {props.unit} {props.title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default UnitDataContainer;
