import React from 'react';
import RX from 'reactxp';
import { Navigator } from 'reactxp-navigation';

import ProgressIndicator from '../ProgressIndicator';
import DatePicker from './DatePicker';
import TextField from './TextField';
import AddressField from './AddressField';
import SelectField from './SelectField';

import styles from './CellStyle';

let CommponentType = {
    TextField: "TextField",
    AddressField: "AddressField",
    SelectField: "SelectField",
    DatePicker: "DatePicker"

};

export default class Cell extends RX.Component {
	constructor(props) {
        super(props);
    }    
	
	render() {
          switch (this.props.FieldType) {
            case CommponentType.TextField:
                return(<TextField styles={styles} />) 
            case CommponentType.AddressField:
                return(<AddressField styles={styles} />)
            case CommponentType.SelectField:
                return(<SelectField styles={styles} />)
            case CommponentType.DatePicker:
            	return (<DatePicker styles={styles} />)        
        }  
    }

}	