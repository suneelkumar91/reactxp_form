import React from 'react';
import RX from 'reactxp';

export default class AddressField extends RX.Component{
	
	render(): JSX.Element {
		return (
			 <RX.TextInput placeholder="Address" multiline="true"  style={[this.props.styles.addressInput]} />
		)
	}
}