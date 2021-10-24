import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
