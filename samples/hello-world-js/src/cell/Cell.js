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
	render() {
          var data = this.props.data;
          switch (data.cellType) { 
            case CellTypes.TextField:
                return(<TextField styles={styles} data={data} onChange={this.props.onChange} />) 
            case CellTypes.SelectField:
                return(<SelectField  styles={styles} data={data} onChange={this.props.onChange} />)
            case CellTypes.DatePicker:
            	return (<DatePicker styles={styles} data={data} onChange={this.props.onChange} />)        
        }
    }
}	