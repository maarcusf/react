import React from "react";

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social
                facebook={props.facebook}
                linkedIn={props.linkedIn}
                youtube={props.youtube}
            />
            <hr></hr>
        </div>
    );
};

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
            <h3>E sou {props.cargo}</h3>
        </div>
    );
};

const Social = (props) => {
    return (
        <div>
            <a href={props.facebook}>Facebook </a>
            <br />
            <a href={props.linkedIn}>LikedIn </a>
            <br />
            <a href={props.youtube}>YouTube</a>
        </div>
    );
};

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe
                nome="Lucas"
                cargo="Programador"
                idade="29"
                facebook="www.facebook.com/Lucas"
                linkedIn="www.linkedIn.com/Lucas"
                youtube="www.youtube.com/Lucas"
            />
            <Equipe
                nome="Marcus"
                cargo="Engenheiro de Software"
                idade="24"
                facebook="www.facebook.com/Marcus"
                linkedIn="www.linkedIn.com/Marcus"
                youtube="www.youtube.com/Marcus"
            />
            <Equipe
                nome="Maria"
                cargo="Analista de Sistemas"
                idade="24"
                facebook="www.facebook.com/Maria"
                linkedIn="www.linkedIn.com/Maria"
                youtube="www.youtube.com/Maria"
            />
        </div>
    );
}

export default App;
