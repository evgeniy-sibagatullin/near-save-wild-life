import React, {useCallback, useEffect, useState} from "react";
import "./App.css";
import {getAnimals} from "./utils/marketplace";
import {login} from "./utils/near";

function App() {
    const account = window.walletConnection.account();
    const [animals, setAnimals] = useState([]);
    const fetchAnimals = useCallback(async () => {
        if (account.accountId) {
            setAnimals(await getAnimals());
        }
    }, [account.accountId]);
    useEffect(() => {
        fetchAnimals().then();
    }, [fetchAnimals]);
    return (
        <>
            {account.accountId ? (
                console.log(animals)
            ) : (
                <button onClick={login}>CONNECT WALLET</button>
            )}
        </>
    );
}

export default App;