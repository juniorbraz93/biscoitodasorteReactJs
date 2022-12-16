import React, { Component } from "react";
import './styles.css'

import Botao from "./components/Botao";
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fraseTexto: ''
    }
    this.frases = [
      'Se A é o sucesso, então A é igual a X mais Y mais Z. O trabalho é X; Y é o lazer; e Z é manter a boca fechada.',
      'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'Sucesso significa realizar seus próprios sonhos, cantar sua própria canção, dançar sua própria dança, criar do seu coração e apreciar a jornada, confiando que não importa o que aconteceça, tudo ficará bem. Criar sua própria aventura!',
      'Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.',
      'O único lugar onde o sucesso vem antes do trabalho é no dicionário.',
      'Procure ser um homem de valor, em vez de ser um homem de sucesso.',
      'O sucesso é um professor perverso. Ele seduz as pessoas inteligentes e as faz pensar que jamais vão cair.'
    ]

    this.quebraBiscoito =this.quebraBiscoito.bind(this)

  }

  quebraBiscoito() {
    let state = this.state

    let nAleatorio = Math.floor(Math.random() * this.frases.length)

    state.fraseTexto = `" ${this.frases[nAleatorio]} "`
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="frasesText" >
          {this.state.fraseTexto}
        </h3>
      </div>
    )
  }

}



export default App