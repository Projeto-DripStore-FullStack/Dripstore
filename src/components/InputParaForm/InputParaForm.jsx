import "./InputParaForm.css";

export const InputParaForm = (props) => {
  return (
    <div className="boxInput1">
      <label className="labelInput" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="inputFinalParaForm"
        placeholder={props.placeholder}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
