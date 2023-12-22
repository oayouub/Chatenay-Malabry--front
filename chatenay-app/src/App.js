import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
