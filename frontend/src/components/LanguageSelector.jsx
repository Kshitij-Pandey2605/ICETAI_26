const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "gu", label: "ગુજરાતી" },
];

export default function LanguageSelector({ language, onChange }) {
  return (
    <div className="pill-group" role="group" aria-label="Choose language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={language === l.code ? "active" : ""}
          onClick={() => onChange(l.code)}
          type="button"
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
