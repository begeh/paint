export default function DimensionItem(props) {
  const { title, placeholder, handleChangeDimensions, type, value } = props;
  return (
    <div className="input-field">
      <p className="dimensions-title">{title}</p>
      <input
        className="input-dimensions"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          handleChangeDimensions({ type: type, value: e.target.value })
        }
      />
    </div>
  );
}
