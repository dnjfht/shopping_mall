import logo from "./logo.svg";
import "./App.css";
import Router from "./shared/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
