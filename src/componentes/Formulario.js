import React, {Component} from 'react'

class FormularioGasto extends Component{

	state = {
		visibility : 'isHidden'
	}
	
	nombreGasto = React.createRef();
	cantidadGasto = React.createRef();

	crearGasto = (e) => {

		e.preventDefault(); 

		//crear el objeto con los datos
		const gasto = {
			nombreGasto: this.nombreGasto.current.value,
			cantidadGasto: this.cantidadGasto.current.value
		}
		
		if(gasto.nombreGasto != '' && gasto.cantidadGasto != ''){
			this.props.agregarGasto(gasto);
			//Reiniciamos el fomrmulario
			e.currentTarget.reset();
			this.setState({visibility: 'isHidden'})
		}else{
			this.setState({visibility: ''})
		}

	}

	render(){
		return(
			<form onSubmit={this.crearGasto}>
			    <h2>Agrega tus gastos aqui</h2>
			    <div className="campo">
			        <label>Nombre Gasto</label>
			        <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
			    </div>

			    <div className="campo">
			        <label>Cantidad</label>
			        <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
			    </div>
			    <p id={this.state.visibility} 
			    	className="alert alert-danger" >
			    	Por favor rellene todos los campos</p>

			    <input className="button-primary u-full-width" type="submit" value="Agregar" />
			</form>
		)
	}
}

export default FormularioGasto; 