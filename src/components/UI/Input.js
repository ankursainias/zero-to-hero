const Input = (props) => {
  return (
      <div className="form-group">
        <label>{props.label}</label>
        <input
          type={props.type}
          className= {props.classes}
          placeholder={props.placeholder}
          onChange={props.onChange}
          autoComplete="off"
          value ={ props.value }
        />
      </div>
    )
}

export default Input