function CommonSelect({ label, name, id, value, onChange, options = [] }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CommonSelect;
