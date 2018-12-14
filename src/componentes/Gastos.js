import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

class Gastos extends Component{
	render(){
		const {nombreGasto, cantidadGasto } = this.props.gasto;
		return(
			<li className="gastos">
				<p>{nombreGasto}
					<span className="gasto"> $ {cantidadGasto} </span>

				</p>
			</li>
		)
	}
}

export default Gastos; 