import { useState } from "react";

export default function BoutonIncremente() {
  const [count, setCount] = useState(0);

  function handleIncremente() {
    setCount(count + 1);
  }

  return(
  <>
    <p>Vous avez appuyer sur le bouton ci dessous {count} fois.</p>
    <button onClick={handleIncremente}>Incrementer {count}</button>
  </>
  )
}
