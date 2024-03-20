import { Unit } from "./Unit";

const UnitDataContainer = (props: Unit) => {
  return (
    <div>
      <a href={props.formUrl} target='_blank'>
        <div className='grid-item'>
          <img
            src={props.imageFile}
            width='512'
            height='512'
            alt={props.unit}
          />
          <img
            src={props.previewImage}
            width='512'
            height='512'
            alt={props.unit}
          />
          <p>
            {props.unit} {props.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default UnitDataContainer;
