import { useEffect, useState } from "react";

export default function Task() {
  const [mouseMoves, setMouseMoves] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [keyPresses, setKeyPresses] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const mouseHandler = () => {
      setMouseMoves((prev) => prev + 1);
    };

    const clickHandler = () => {
      setClicks((prev) => prev + 1);
    };

    const keyHandler = () => {
      setKeyPresses((prev) => prev + 1);
    };

    window.addEventListener("mousemove", mouseHandler);
    window.addEventListener("click", clickHandler);
    window.addEventListener("keydown", keyHandler);

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("keydown", keyHandler);
      clearInterval(timer);
    };
  }, []);

  const sessionId = localStorage.getItem("session_id");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Behavior Assessment</h1>

      <p>
        Move your mouse, click around, and type on your keyboard.
      </p>

      <hr />

      <h3>Live Metrics</h3>

      <p>Session ID: {sessionId}</p>
      <p>Mouse Moves: {mouseMoves}</p>
      <p>Clicks: {clicks}</p>
      <p>Key Presses: {keyPresses}</p>
      <p>Time Elapsed: {seconds}s</p>

      <textarea
        placeholder="Type something here..."
        rows="6"
        cols="60"
      />

      <br />
      <br />

      <button>
        Finish Assessment
      </button>
    </div>
  );
}