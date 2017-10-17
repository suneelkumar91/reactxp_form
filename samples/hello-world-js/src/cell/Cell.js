import React from 'react';
import RX from 'reactxp';

import DatePicker from './DatePicker';
import TextField from './TextField';
import AddressField from './AddressField';
import SelectField from './SelectField';

import styles from './CellStyle';

let CellTypes = {
    TextField: "textField",
    SelectField: "selectField",
    DatePicker: "dateField"
};

export default class Cell extends RX.Component {
	constructor(props) {
        super(props);
    }    

	render() {
          switch (this.props.cellType) { 
            case CellTypes.TextField:
                return(<TextField styles={styles} fieldLabel={this.props.fieldLabel} fieldName={this.props.fieldName} multiline={this.props.multiline}  />) 
            case CellTypes.SelectField:
                return(<SelectField fieldLabel={this.props.fieldLabel} fieldName={this.props.fieldName} dataSource={this.props.dataSource} styles={styles} />)
            case CellTypes.DatePicker:
            	return (<DatePicker styles={styles} fieldLabel={this.props.fieldLabel} fieldName={this.props.fieldName} />)        
        }  
    }

}	