import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RandomUser from "./components/RandomUsers";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"
      />

      <RandomUser />

      {/* <Users /> */}

      <Footer />
    </div>
  );
}

export default App;
