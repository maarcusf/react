import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
          
        }

        this.frases = ['A vida trará coisas boas se tiveres paciência.',
        'Não compense na ira o que lhe falta na razão.',
         'Defeitos e virtudes são apenas dois lados da mesma moeda', 
       'A maior de todas as torres começa no solo.', 
       'Não há que ser forte. Há que ser flexível.', 'Siga os bons e aprenda com eles.' ]

    }

    render(){
        return(
            <div>
                <img src={require('./assets/biscoito.png')}/>
                <Botao/>
                <h3>Frase numero 1 aleatoria...</h3>
            </div>
        )
    }
}


class Botao extends Component{
    render(){
        return(
            <div>
                <button>Abrir Biscoito</button>
            </div>
        )
    }
}

export default App;

