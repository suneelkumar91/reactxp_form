import React from 'react';
import RX from 'reactxp';
import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';
import styles from './FormStyle';
import Cell from './cell/Cell';


const jsonData = [
    {
        cellType: "textField",
        fieldLabel: "Name",
        fieldName: "userName"
    },
    {
        cellType: "textField",
        fieldLabel: "Phone",
        fieldName: "phone",
        keyboardType: "number-pad",
    },
    {
        cellType: "textField",
        fieldLabel: "Email",
        fieldName: "email",
        keyboardType: "email-address",
    },
    {
        cellType: "dateField",
        fieldLabel: "Date Of Birth",
        fieldName: "date_of_birth"
    },

    {
        cellType: "textField",
        fieldLabel: "Description",
        fieldName: "description",
        multiline: true
    },
    {
        cellType: "textField",
        fieldLabel: "Interest",
        fieldName: "interest",
        isEditable: true
    },
    {
       cellType: "selectField",
       fieldLabel: "Gender",
       fieldName: "gender",
       dataSource: [
          {
            label: 'Male',
            value: 'male'
          },
          {
            label: 'Female',
            value: 'female'
          }
       ]
       
    },
    {
       cellType: "selectField",
       fieldLabel: "How you know about us ?",
       fieldName: "know_us",
       dataSource: [
          {
            label: 'Facebook',
            value: 'facebook'
          },
          {
            label: 'Twitter',
            value: 'twitter'
          },
          {
            label: 'Google',
            value: 'google'
          },
          {
            label: 'Paper',
            value: 'paper'
          },
          {
            label: 'Friends',
            value: 'friends'
          },
          {
            label: 'Other',
            value: 'other'
          }
       ]
       
    }
];

   
export default class FormPanel extends RX.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }  

	render(): JSX.Element {
		return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    
                    <RX.Text style={ styles.titleText }>
                        Cell Field control built using ReactXP     
                    </RX.Text>

                    {Object.keys(this.state).map((item, i) => <PrintContent name={item} value={this.state[item]} /> )} 

                    {jsonData.map((data, key) => <Cell data={data} value={this.state[data.fieldName]} onChange={(name,value) => this._inputChangeHandler.bind(name,data.fieldName)} />)}
                    
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onSubmitForm }>
                        <RX.Text style={ styles.buttonText }>
                            Submit
                        </RX.Text>
                    </RX.Button>

                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateBack }>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>

                    </RX.Button>
                
                </RX.View>

            </RX.ScrollView>  
        )
    }

    _inputChangeHandler = (name,value) => {
        this.setState({ [name]: value });
    }

};


export class PrintContent extends React.Component {
    render() {
      return (
         <RX.Text>
            {this.props.name} : {this.props.value} 
         </RX.Text>
      );
    }
}