const SYSTEMS = [
  { code: "hybrid", label: "Rule-grounded" },
  { code: "rag", label: "Plain RAG" },
  { code: "symbolic", label: "Form only" },
];

export default function SystemSelector({ system, onChange }) {
  return (
    <div className="pill-group" role="group" aria-label="Choose which system answers">
      {SYSTEMS.map((s) => (
        <button
          key={s.code}
          className={system === s.code ? "active" : ""}
          onClick={() => onChange(s.code)}
          type="button"
          title={`Answer using the ${s.label} system`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
