import { useState } from "react";

export default function BoutonIncremente({texte,nb}) {
  const [count, setCount] = useState(nb);

  function handleIncremente() {
    setCount(count + 1);
  }

  return(
  <>
    <p>{texte} {count}</p>
    <button onClick={handleIncremente}>Incrementer {count}</button>
  </>
  )
}
