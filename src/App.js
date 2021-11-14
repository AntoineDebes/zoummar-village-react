import "./normalize.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import { UserCredentialProvider } from "./context/UserCredentialContext";

function App() {
  return (
    <UserCredentialProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserCredentialProvider>
  );
}

export default App;
