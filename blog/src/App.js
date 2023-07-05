import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home.js";
import Trending from "./component/Home/Trending.js";

// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/NavBar/Navbar.js";
function App() {
  return (
    <div className="App">
      <Navbar className="App-header" />
      <Home />
      {/* <Trending /> */}
    </div>
  );
}

export default App;
