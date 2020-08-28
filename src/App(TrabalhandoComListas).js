import React , {Component} from 'react'
import Feed from './components/Feed/Feed'
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed:[
                {id:1, username: "Mateus", curtidas: 10, comentarios: 2},
                {id:2, username: "Marcus", curtidas: 5, comentarios: 15},
                {id:3, username: "Luciana", curtidas: 1478, comentarios: 865},
                {id:4, username: "Ricardo", curtidas: 1, comentarios: 1}
            ]
        }
   
    }

 

    render(){
        return(
            <div>
                
            {
                this.state.feed.map((item)=>{
                    return(
                       <Feed id={item.id} username={item.username} 
                       curtidas={item.curtidas}
                        comentarios={item.comentarios}/>
                    );
                })
            }

            </div>
        )
    }
}

export default App;