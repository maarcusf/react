import React, { Component } from "react";
import Membro from "./components/Membro";

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Membro nome="Visitante" />
                </h1>
            </div>
        );
    }
}

export default App;
