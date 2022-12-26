export default function Filter({ value, onChange }) {
  return (
    <label>
      Finde contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
