import React, { Component } from 'react';

class Botao extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
            <div>
              <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
          );
  }

}

export default Botao