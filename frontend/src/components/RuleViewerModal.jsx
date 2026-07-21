export default function RuleViewerModal({ rule, onClose }) {
  if (!rule) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(43,42,39,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--color-paper-raised)",
          borderRadius: 14,
          maxWidth: 480,
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "20px 22px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginTop: 0, fontFamily: "var(--font-display)", color: "var(--color-indigo-deep)" }}>
          {rule.name}
        </h3>
        <p style={{ fontSize: 13.5, color: "#6b6656", lineHeight: 1.55 }}>{rule.short_description}</p>
        <p style={{ fontSize: 13, lineHeight: 1.6 }}>{rule.source_text}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: 10,
            background: "var(--color-indigo)",
            color: "#fff",
            border: "none",
            borderRadius: 999,
            padding: "8px 18px",
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
