import { useState } from "react";
import { FIELD_META } from "../fieldLabels";

export default function ClarificationForm({ missingFields, onSubmit }) {
  const [values, setValues] = useState({});

  function handleChange(field, rawValue) {
    setValues((v) => ({ ...v, [field]: rawValue }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const parsed = {};
    for (const field of missingFields) {
      const meta = FIELD_META[field];
      const raw = values[field];
      if (raw === undefined || raw === "") continue;
      if (meta?.parse) {
        parsed[field] = meta.parse(raw);
      } else if (meta?.type === "number") {
        parsed[field] = Number(raw);
      } else {
        parsed[field] = raw;
      }
    }
    onSubmit(parsed);
  }

  return (
    <div className="message-row system">
      <form className="clarify-card" onSubmit={handleSubmit}>
        <p className="clarify-card__title">A few more details are needed to check this:</p>

        {missingFields.map((field) => {
          const meta = FIELD_META[field] || { label: field, type: "text" };
          return (
            <div className="clarify-field" key={field}>
              <label htmlFor={field}>{meta.label}</label>
              {meta.type === "select" ? (
                <select id={field} onChange={(e) => handleChange(field, e.target.value)} defaultValue="">
                  <option value="" disabled>
                    Choose…
                  </option>
                  {meta.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field}
                  type={meta.type === "number" ? "number" : "text"}
                  onChange={(e) => handleChange(field, e.target.value)}
                />
              )}
            </div>
          );
        })}

        <button className="clarify-submit" type="submit">
          Check eligibility
        </button>
      </form>
    </div>
  );
}
