export default function MessageBubble({ role, text, pending }) {
  return (
    <div className={`message-row ${role}`}>
      <div className={`message-bubble ${role}${pending ? " pending" : ""}`}>{text}</div>
    </div>
  );
}
