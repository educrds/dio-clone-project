import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/sign-up";
import { Feed } from "./pages/feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
