import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import VerdictCard from "./VerdictCard";
import ClarificationForm from "./ClarificationForm";

export default function ChatWindow({ messages, schemeName, onClarify, onShowRule }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <div className="empty-state">
          Choose a scheme above, then describe your situation — for example,
          "I'm a farmer with 1 acre of land, do I qualify for PM-KISAN?"
        </div>
      )}

      {messages.map((m, i) => {
        if (m.type === "text") {
          return <MessageBubble key={i} role={m.role} text={m.text} pending={m.pending} />;
        }
        if (m.type === "verdict") {
          return (
            <VerdictCard
              key={i}
              verdict={m.verdict}
              responseText={m.responseText}
              schemeName={schemeName}
              onShowRule={onShowRule}
            />
          );
        }
        if (m.type === "clarify") {
          return (
            <ClarificationForm
              key={i}
              missingFields={m.missingFields}
              onSubmit={(profile) => onClarify(i, m, profile)}
            />
          );
        }
        return null;
      })}
      <div ref={bottomRef} />
    </div>
  );
}
