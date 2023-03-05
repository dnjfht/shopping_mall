import logo from "./logo.svg";
import "./App.css";
import Router from "./shared/Router";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
