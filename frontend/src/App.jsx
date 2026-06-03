import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Task from "./pages/Task";
import Processing from "./pages/Processing";
import Dashboard from "./pages/Dashboard";
import Legacy from "./pages/Legacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/task" element={<Task />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/legacy" element={<Legacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;