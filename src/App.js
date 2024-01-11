import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { EditorProvider } from "./hooks/EditorProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <EditorProvider>
        <BrowserRouter>
          <div className="page-wrapper">
            <Header />
            <div className="main-wrapper">
              <Main />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </EditorProvider>
    </div>
  );
}

export default App;
