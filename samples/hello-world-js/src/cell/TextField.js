import React from 'react';
import RX from 'reactxp';

export default class TextField extends RX.Component{
	
	render(): JSX.Element {
		return (
			<RX.View>
			 	<RX.Text style={ this.props.styles.LabelText }> {this.props.fieldLabel} </RX.Text>
			 	<RX.TextInput placeholder={this.props.placeholder} name={this.props.fieldName} multiline={this.props.multiline} style={this.props.styles.textInput} /> 
			</RX.View> 
		)
	}
}