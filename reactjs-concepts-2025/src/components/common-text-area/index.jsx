function CommonTextarea({ label, name, id, placeholder, value, onChange }) {
    return (
      <div>
        <label htmlFor={name}>{label}</label><br />
        <textarea
          id={id}
          name={name}
          placeholder={placeholder || 'Enter text...'}
          value={value}
          onChange={onChange}
          rows="4"
          cols="30"
        ></textarea>
      </div>
    );
  }
  
  export default CommonTextarea;
  