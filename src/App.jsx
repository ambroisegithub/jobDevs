import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Apply from "./Components/Apply/Apply";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
