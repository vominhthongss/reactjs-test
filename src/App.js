import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
