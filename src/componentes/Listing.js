import React, {Component} from 'react'; 
import Gastos from './Gastos';


class Listing extends Component{
	render(){

		return(
			<div className="gastos-realizados">
				<h2>Listing</h2>
				{Object.keys(this.props.gastos).map(key => (
					<Gastos
						key={key}
						gasto={this.props.gastos[key]}
					/>
				))}
			</div>
		)	
	}

}

export default Listing; 