import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { strings } from "./strings";

function App() {
  return (
    <div className="layout">
        <Header />
        <main>
          <h2>{strings.content}</h2>
        </main>
        <Footer />
    </div>
  );
}

export default App;
