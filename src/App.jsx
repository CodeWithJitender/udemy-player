import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonDetailsPage from "./pages/LessonDetailsPage.jsx";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<LessonDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
