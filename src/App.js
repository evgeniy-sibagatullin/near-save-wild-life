import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { getAnimals } from "./utils/marketplace";
import { login } from "./utils/near";

function App() {
  const account = window.walletConnection.account();
  const [animals, setAnimals] = useState([]);
  const fetchAnimals = useCallback(async () => {
    if (account.accountId) {
      setAnimals(await getAnimals());
    }
  });
  useEffect(() => {
    fetchAnimals();
  }, []);
  return (
      <>
        {account.accountId ? (
            animals.forEach((animal) => console.log(animals))
        ) : (
            <button onClick={login}>CONNECT WALLET</button>
        )}
      </>
  );
}

export default App;