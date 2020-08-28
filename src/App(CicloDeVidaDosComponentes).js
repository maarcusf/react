import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: "00:00:00",
        };
    }

    //Ciclo de vida - Assim que o componente for montado...
    componentDidMount() {
        setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    }

    //Componente - Assim que o componente for atualizado () "componentDidMount")
    componentDidUpdate() {
        console.log("Atualizou");
    }

    //Esse componente deve atualizar? retorna true ou false
    /*componentDidUpdate(){

    }*/

    render() {
        return (
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;
