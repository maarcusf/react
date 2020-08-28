import React, { Component } from "react";

class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome,
        };
        this.entrar = this.entrar.bind(this);
        // this.sair = this.sair.bind(this);
    }

    entrar() {
        this.setState({ nome: "Marcus" });
    }

    /*sair() {
        this.setState({ nome: "Visitante" });
    }*/

    render() {
        return (
            <div>
                <h2> Bem-Vindo(a) {this.state.nome}</h2>
                <button onClick={this.entrar}>Entrar como Marcus</button>
                <button onClick={() => this.setState({ nome: "" })}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;
