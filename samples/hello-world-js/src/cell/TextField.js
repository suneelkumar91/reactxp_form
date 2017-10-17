import React from 'react';
import RX from 'reactxp';

export default class TextField extends RX.Component{
	
	render(): JSX.Element {
		return (
			 <RX.TextInput placeholder="Full Name" style={this.props.styles.textInput} /> 
		)
	}
}	