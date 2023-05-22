import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navebar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home.js";
import Footer from "./component/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar>Navbar</Navbar>

      <header className="App-header">
        <Home>Home</Home>
      </header>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
