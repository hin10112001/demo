import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
