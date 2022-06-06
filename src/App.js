import React, {useCallback, useEffect, useState} from "react";
import "./App.css";
import { login, logout as destroy, accountBalance } from "./utils/near";
import { Container, Nav } from "react-bootstrap";
import Wallet from "./components/Wallet";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/coverImg.jpg";

function App() {
    const account = window.walletConnection.account();
    const [balance, setBalance] = useState("0");
    const getBalance = useCallback(async () => {
        if (account.accountId) {
            setBalance(await accountBalance());
        }
    }, [account.accountId]);

    useEffect(() => {
        getBalance().then();
    }, [getBalance]);
    return (
        <>
            {/* <Notification /> */}
            {account.accountId ? (
                <Container fluid="md">
                    <Nav className="justify-content-end pt-3 pb-5">
                        <Nav.Item>
                            <Wallet
                                address={account.accountId}
                                amount={balance}
                                symbol="NEAR"
                                destroy={destroy}
                            />
                        </Nav.Item>
                    </Nav>
                    <main>{/* <Products /> */}</main>
                </Container>
            ) : (
                <Cover login={login} coverImg={coverImg} />
            )}
        </>
    );
}

export default App;