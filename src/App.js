import "./normalize.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
// import Activities from "./pages/Activities";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper" id="wrapper">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
