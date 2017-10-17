import React from 'react';
import RX from 'reactxp';

export default class TextField extends RX.Component{
	
	render(): JSX.Element {
		var data = this.props.data;
		var styles = this.props.styles;
		return (
			<RX.View>
			 	<RX.Text style={ styles.LabelText }> {data.fieldLabel} </RX.Text>
			 	<RX.TextInput placeholder={data.placeholder} name={data.fieldName} multiline={data.multiline} style={styles.textInput} /> 
			</RX.View> 
		)
	}
}