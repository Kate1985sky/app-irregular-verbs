import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { WordOfTheDay } from "./pages/WordOfTheDay/WordOfTheDay";
import { NotFound } from "./pages/NotFound";
import { AllWords } from "./pages/AllWords/AllWords";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Create } from "./pages/Create/Create";
import styles from "./App.css";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-of-the-day" element={<WordOfTheDay />} />
          <Route path="/all-words" element={<AllWords />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
