import React from 'react';
import RX from 'reactxp';

const pickerItems: RX.Types.PickerPropsItem[] = [
    {
        label: 'Male',
        value: 'male'
    },
    {
        label: 'Female',
        value: 'female'
    }
];

export default class SelectField extends RX.Component{
	
	render(): JSX.Element {
		return (
			 
            <RX.Text numberOfLines={ 500 }>
                <RX.Picker style={this.props.styles.dropdown}
                    items={ pickerItems }
                />
            </RX.Text>       
		)
	}
}