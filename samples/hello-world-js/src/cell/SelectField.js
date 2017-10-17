import React from 'react';
import RX from 'reactxp';

export default class SelectField extends RX.Component{
	
	render(): JSX.Element {
		return (
            <RX.View>
    			<RX.Text style={this.props.styles.LabelText}>{this.props.fieldLabel}</RX.Text> 
                <RX.Text numberOfLines={ 500 }>	
                    <RX.Picker style={this.props.styles.dropdown}
                        items={ this.props.dataSource }
                        onValueChange="void;"
                        name= {this.props.fieldName}
                    />
                </RX.Text>
            </RX.View>           
		)
	}
}