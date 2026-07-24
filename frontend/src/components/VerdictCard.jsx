import { labelForField } from "../fieldLabels";

export default function VerdictCard({ verdict, responseText, schemeName, onShowRule }) {
  const { eligible, passed_clauses = [], failed_clauses = [] } = verdict;
  const allClauses = [
    ...passed_clauses.map((c) => ({ ...c, passed: true })),
    ...failed_clauses.map((c) => ({ ...c, passed: false })),
  ];

  return (
    <div className="message-row system">
      <div className="verdict-card">
        <div className={`verdict-card__banner ${eligible ? "eligible" : "ineligible"}`}>
          <span className="stamp">{eligible ? "✓" : "✕"}</span>
          {eligible ? "Eligible" : "Not eligible"} — {schemeName}
        </div>

        {responseText && <p className="verdict-card__summary">{responseText}</p>}

        {allClauses.length > 0 && (
          <div className="verdict-card__clauses">
            {allClauses.map((c, i) => (
              <div className="clause-row" key={c.id || i}>
                <span className={`clause-row__mark ${c.passed ? "pass" : "fail"}`}>
                  {c.passed ? "✓" : "✕"}
                </span>
                <span>{c.description || labelForField(c.field)}</span>
              </div>
            ))}
          </div>
        )}

        {onShowRule && (
          <div className="verdict-card__footer">
            <a href="#" onClick={(e) => { e.preventDefault(); onShowRule(); }}>
              View this scheme's published rules
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
