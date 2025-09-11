import AppRouter from "./routes";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
