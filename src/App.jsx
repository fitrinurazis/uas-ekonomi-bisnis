import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
