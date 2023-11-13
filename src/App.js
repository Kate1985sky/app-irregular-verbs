import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { WordOfTheDay } from "./pages/WordOfTheDay/WordOfTheDay";
import { NotFound } from "./pages/NotFound";
import { AllWords } from "./pages/AllWords/AllWords";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-of-the-day" element={<WordOfTheDay />} />
          <Route path="/all-words" element={<AllWords />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
