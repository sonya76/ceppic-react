import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import RandomUser from "./components/RandomUsers";
// import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"
      />

      {/* <RandomUser /> */}

      {/* <Users /> */}

      <Footer />
    </div>
  );
}

export default App;
