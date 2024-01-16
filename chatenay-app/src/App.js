import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
