import React from 'react';
import RX from 'reactxp';

export default class TextField extends RX.Component{
	
	render(): JSX.Element {
		var data = this.props.data;
		var styles = this.props.styles;
		return (
			<RX.View>
			 	<RX.Text style={ styles.LabelText }> {data.fieldLabel} </RX.Text>
			 	<RX.TextInput placeholder={data.placeholder} name={data.fieldName} value={this.props.value} multiline={data.multiline} keyboardType={data.keyboardType} onChangeText={this.props.onChange(this.event, data.fieldName)} style={data.multiline ? styles.addressInput : styles.textInput} /> 
			</RX.View> 
		)
	}
}