export default function SchemeSelector({ schemes, schemeId, onChange }) {
  return (
    <select
      className="select-field"
      value={schemeId || ""}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Choose scheme"
    >
      <option value="" disabled>
        Choose a scheme…
      </option>
      {schemes.map((s) => (
        <option key={s.scheme_id} value={s.scheme_id}>
          {s.name}
        </option>
      ))}
    </select>
  );
}
