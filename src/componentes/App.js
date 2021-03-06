import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario'
import Listing from './Listing'
import { validarPresupuesto} from '../helper'
import ControlPresupuesto from './ControlPresupuesto'

class App extends Component {

  state = {
    presupuesto : '', 
    restante : '',
    gastos: {} 
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cual es tu presupuesto?');

    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
      this.setState({
        presupuesto : presupuesto,
        restante : presupuesto
      });
    }else{
      this.obtenerPresupuesto();
    }
  }

  agregarGasto = gasto => {

    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto;

    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto); 

    this.setState({gastos});

  }

  //restar del presupuesto cuando se crea una gasto
  restarPresupuesto = cantidad => {
    let restar  = Number(cantidad);

    let restante = this.state.restante; 
    restante -= restar; 

    this.setState({restante})

  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo="Gasto semanal"
        />
        <div className="contenido-principal contenido">
          <div className="row">
             <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}

              />
             </div>
             <div className="one-half column">
             <Listing
                gastos ={this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
