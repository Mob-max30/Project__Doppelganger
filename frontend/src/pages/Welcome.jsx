import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const startSession = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/session/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_agent: navigator.userAgent,
            screen_size: `${window.innerWidth}x${window.innerHeight}`,
            language_context: navigator.language,
          }),
        }
      );

      const data = await response.json();

      localStorage.setItem("session_id", data.session_id);

      navigate("/task");
    } catch (error) {
      console.error(error);
      alert("Failed to start session");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Project Doppelganger</h1>

      <p>
        Digital Legacy Assessment
      </p>

      <button onClick={startSession}>
        {loading ? "Starting..." : "Start Assessment"}
      </button>
    </div>
  );
}