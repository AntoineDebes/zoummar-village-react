import "./normalize.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Activities from "./pages/Activities";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper" id="wrapper">
        <Header />
        <Activities />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
