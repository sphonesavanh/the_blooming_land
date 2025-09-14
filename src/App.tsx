import AppRouter from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
  );
}

export default App;
