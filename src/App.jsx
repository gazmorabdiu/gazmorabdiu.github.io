import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./assets/css/fontawesome.css";
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/animate.css";
import "./assets/css/textRotate.css";
import "./assets/css/flaticon.css";
import "./assets/css/select2.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:slug" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
