import React, { Component } from "react";

class Equipe extends Component {
    render() {
        return (
            <div>
                <Sobre
                    nome={this.props.nome}
                    cargo={this.props.cargo}
                    idade={this.props.idade}
                />
                <Social
                    facebook={this.props.facebook}
                    linkedin={this.props.linkedin}
                />
                <hr></hr>
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2>Olá sou o {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}

const Social = (props) => {
    return (
        <div>
            <a href={props.facebook}>Facebook </a>
            <br />
            <a href={props.linkedin}>LikedIn </a>
        </div>
    );
};

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>

            <Equipe
                nome="Marcus"
                cargo="Programador"
                idade="24"
                facebook="www.facebook.com.br/Marcus"
                linkedin="www.linkedin.com.br/Marcus"
            />
            <Equipe
                nome="Lucas"
                cargo="Designer"
                idade="28"
                facebook="www.facebook.com.br/Lucas"
                linkedin="www.linkedin.com.br/Lucas"
            />
            <Equipe
                nome="Patricia"
                cargo="DBA"
                idade="30"
                facebook="www.facebook.com.br/Patricia"
                linkedin="www.linkedin.com.br/Patricia"
            />
        </div>
    );
}

export default App;
