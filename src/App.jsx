import { useState } from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [count,setCount] = useState(20);

  const message = <h1>Hello le monde</h1>;
  const message2 = (
    <div>
      <h3>Block html</h3>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
  const calcul = <h2>Cette operation 2 * 6 = {2 * 6}</h2>;
  const loggedIn = false;
  const voitures = ["Ford", "Audi", "Honda"];
  const voitures2 = [
    { id: 1, nom: "Ford" },
    { id: 2, nom: "Audi" },
    { id: 3, nom: "Honda" },
  ];

  return (
    <div className="App">
      <img src="/assets/img/logo512.png" /> 
      <Header title="La World Company" texte="React JS fonde par Facebook" />
      {message}
      {message2}
      {calcul}
      {loggedIn && <p>Vous etes connecte</p>}
      {loggedIn ? <p>Vous etes connecte</p> : <p>Inscripttion</p>}
      <ul>
        {voitures.map((voiture) => (
          <li key={voiture}>{voiture}</li>
        ))}
      </ul>
      <ul>
        {voitures2.map((voiture) => (
          <li key={voiture.id}>{voiture.nom}</li>
        ))}
      </ul>
      <div>
        <p>Vous avez appuyer sur le bouton ci dessous {count} fois.</p>
        <button onClick={() => setCount(count + 1)}>Incrementer</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
