import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha:'',
            sexo: 'masculino',
            error: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }


    cadastrar(event){
        const {nome,email,senha, sexo} = this.state

        if(nome!== '' && email !== '' && senha!== ''){
            alert(`Nome: ${nome}\nEmail: ${email}\n Senha: ${senha}`)            
        } else {
            this.setState({error: 'Ops! Parece estar faltando algo'})
        }

        //Não atualiza a página após submit
        event.preventDefault()
        
    }


    render(){
        return(
            <div>
                <h1>Novo Usuário</h1>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.cadastrar}>
                <label>Nome: </label>
                <input type="text" value={this.state.nome} 
                onChange={(e) => this.setState({nome: e.target.value})} /><br/>
                <label>E-mail:</label>
                <input type="email" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} /> <br/>
                <label>Senha:</label>
                <input type="password" value={this.state.senha} onChange={(e)=> this.setState({senha: e.target.value})}/> <br/>
                
                Sexo:
                <select name = "sexo" value = {this.state.sexo} onChange={(e)=> this.setState({sexo: e.target.value})}>
                    <option value = "masculino">
                        Masculino
                    </option>
                    <option value = "feminino">
                        Feminino
                    </option>
                    </select><br/>

                <button type="submit">Cadastrar</button>
            </form>

            </div>
        )
    }
}

export default App;