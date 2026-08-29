/**
 * Line marks for the rotating "I build" list. Same drawing language as the
 * featured project artwork: one stroke weight, charcoal structure, terracotta
 * for the element that carries the idea.
 */

const S = "stroke-charcoal/70";
const A = "stroke-terracotta";

const marks: Record<string, React.ReactNode> = {
  // A single agent: one node, observing and acting in a loop.
  agent: (
    <>
      <circle cx="24" cy="24" r="6" className={A} />
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" className={S} />
      <path d="M11 11l5 5M37 11l-5 5M11 37l5-5M37 37l-5-5" className={S} />
      <circle cx="24" cy="24" r="15" className={S} strokeDasharray="3 5" />
    </>
  ),

  // Several agents coordinated by a hub.
  orchestration: (
    <>
      <circle cx="24" cy="24" r="5" className={A} />
      <circle cx="8" cy="10" r="4" className={S} />
      <circle cx="40" cy="10" r="4" className={S} />
      <circle cx="8" cy="38" r="4" className={S} />
      <circle cx="40" cy="38" r="4" className={S} />
      <path d="M11.5 12.5 20 21M36.5 12.5 28 21M11.5 35.5 20 27M36.5 35.5 28 27" className={S} />
    </>
  ),

  // Retrieval: a corpus, a query cutting into it, an answer coming back.
  rag: (
    <>
      <path d="M6 12h16v28H6zM10 8h16v28" className={S} />
      <circle cx="34" cy="18" r="8" className={A} />
      <path d="M40 24l6 7" className={A} />
      <path d="M26 34h16" className={S} />
      <path d="M38 30l4 4-4 4" className={S} />
    </>
  ),

  // Client, service, store: three tiers wired together.
  fullstack: (
    <>
      <rect x="7" y="6" width="34" height="9" className={S} />
      <rect x="7" y="19" width="34" height="9" className={A} />
      <rect x="7" y="32" width="34" height="9" className={S} />
      <path d="M14 15v4M14 28v4M34 15v4M34 28v4" className={S} />
    </>
  ),

  // A pipeline of steps with a branch: work that runs itself.
  workflow: (
    <>
      <rect x="4" y="18" width="12" height="10" className={S} />
      <rect x="32" y="6" width="12" height="10" className={S} />
      <rect x="32" y="30" width="12" height="10" className={S} />
      <circle cx="24" cy="23" r="4" className={A} />
      <path d="M16 23h4M28 21l4-9M28 25l4 9" className={S} />
    </>
  ),

  // Nested frames: the model sits inside the system, not bolted on.
  architecture: (
    <>
      <rect x="4" y="4" width="40" height="40" className={S} />
      <rect x="12" y="12" width="24" height="24" className={S} strokeDasharray="3 4" />
      <rect x="19" y="19" width="10" height="10" className={A} />
      <path d="M4 16h8M36 16h8M4 32h8M36 32h8" className={S} />
    </>
  ),

  // Segments carrying a stream, with one payload in flight.
  pipeline: (
    <>
      <path d="M4 16h40M4 32h40" className={S} />
      <path d="M14 16v16M30 16v16" className={S} strokeDasharray="2 4" />
      <circle cx="10" cy="24" r="2.5" className={S} />
      <circle cx="22" cy="24" r="3.5" className={A} />
      <circle cx="36" cy="24" r="2.5" className={S} />
    </>
  ),

  // A die and its pins: the layer underneath everything else.
  lowlevel: (
    <>
      <rect x="12" y="12" width="24" height="24" className={S} />
      <rect x="20" y="20" width="8" height="8" className={A} />
      <path d="M18 4v8M24 4v8M30 4v8M18 36v8M24 36v8M30 36v8" className={S} />
      <path d="M4 18h8M4 24h8M4 30h8M36 18h8M36 24h8M36 30h8" className={S} />
    </>
  ),
};

export default function BuildMark({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-full w-full fill-none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {marks[name] ?? null}
    </svg>
  );
}
