export default function Task() {
  const sessionId = localStorage.getItem("session_id");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Task Screen</h1>

      <p>
        Session ID:
      </p>

      <code>{sessionId}</code>
    </div>
  );
}