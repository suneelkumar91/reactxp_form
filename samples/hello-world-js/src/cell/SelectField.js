import React from 'react';
import RX from 'reactxp';

export default class SelectField extends RX.Component{
	
	render(): JSX.Element {
        var data = this.props.data;
        var styles = this.props.styles;
		return (
            <RX.View>
    			<RX.Text style={styles.LabelText}>{data.fieldLabel}</RX.Text> 
                <RX.Text numberOfLines={ 2 }>	
                    <RX.Picker style={styles.dropdown}
                        items={ data.dataSource }
                        onValueChange= {this.props.onChange(event)}
                        name= {data.fieldName}
                    />
                </RX.Text>
            </RX.View>           
		)
	}
}