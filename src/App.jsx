import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Apply from "./Components/Apply/Apply";
import { ThemeProvider } from "./ThemeContext"; // Make sure to import ThemeProvider

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          {" "}
          {/* Wrap your routes with ThemeProvider */}
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/:id" element={<Apply />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
