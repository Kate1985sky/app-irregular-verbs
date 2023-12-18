import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { EditorProvider } from "./hooks/EditorProvider";
import { ContentBox } from "./components/ContentBox/ContentBox";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <EditorProvider>
        <BrowserRouter>
          <ContentBox>
            <Header />
            <Main />
            <Footer />
          </ContentBox>
        </BrowserRouter>
      </EditorProvider>
    </div>
  );
}

export default App;
