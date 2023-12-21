import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { EditorProvider } from "./hooks/EditorProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <EditorProvider>
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
      </EditorProvider>
    </div>
  );
}

export default App;
