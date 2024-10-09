import "./InputParaForm.css";
export const InputParaForm = (props) => {
  return (
    <>
      <div className="boxInput1">
        <label className="labelInput" htmlFor="">
          {props.label}
        </label>
        <input
          className="inputFinalParaForm"
          placeholder={props.placeholder}
          type="text"
        />
      </div>
    </>
  );
};
