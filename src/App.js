import React, {Component} from "react";
import './style.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      textoFrase : '',
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

      this.frases = ['Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.  Sêneca',
      '“A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades.” Epicteto',
      '“Você tem poder sobre sua mente não sobre eventos externos. Perceba isso e você encontrará a sua força.” Marco Aurélio',
      '“Sorte é o que acontece quando a preparação encontra a oportunidade“. Sêneca',
      '“Todos nós podemos errar, mas a perseverança no erro é a verdadeira loucura“. Zenão',
      '“A felicidade de sua vida depende da qualidade de seus pensamentos.” Marco Aurélio',
      '“Quem não se contenta com pouco, não se contenta com nada.” Epicuro',
      '“O amigo é um segundo eu“. Zenão',
      '“As dificuldades fortalecem a mente, assim como o trabalho o faz com o corpo“. Sêneca',
      '“Pense na beleza da vida. Observe as estrelas e veja-se correndo com elas.” Marco Aurélio'
    ]

  }

  quebraBiscoito(){
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state)
  }

  render(){
    return (
      <>

      <div className="container">
           <img src={require('./assets/biscoito.png')} className="img" />
              <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>      
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>

      </>
    );
  }
}


class Botao extends Component{
  render(){
    return <>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
    </>
  }
}

export default App;
