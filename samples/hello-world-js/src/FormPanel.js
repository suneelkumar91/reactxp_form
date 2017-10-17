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
        fieldName: "phone"
    },
    {
        cellType: "textField",
        fieldLabel: "Email",
        fieldName: "email"
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
    
	render(): JSX.Element {
		return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    
                    <RX.Text style={ styles.titleText }>
                        Cell Field control built using ReactXP
                    </RX.Text>

                    {jsonData.map((data, key) => <Cell data={data} />)}
                
                </RX.View>
            </RX.ScrollView>  
        )
    }
}