import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.tsx";
import FavoriteCats from "./pages/FavoriteCats.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<FavoriteCats />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
