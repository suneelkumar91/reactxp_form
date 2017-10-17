import React from 'react';
import RX from 'reactxp';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';
import DatePicker from './cell/DatePicker';
import TextField from './cell/TextField';
import Cell from './cell/Cell';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        // justifyContent: 'left',
        // alignItems: 'left'
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 22,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
    }),
    videoTitleText: RX.Styles.createTextStyle({
        marginBottom: 8
    }),
    progressMargin: RX.Styles.createViewStyle({
        margin: 8
    }),
    video: RX.Styles.createViewStyle({
        height: 176,
        width: 320
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9',
        width: 100
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    textInput: RX.Styles.createViewStyle({
    	margin: 8,
    	borderWidth: 1,
        width: 400,
        height: 30,

    }),
    addressInput: RX.Styles.createViewStyle({
        height: 70,
        width: 400,
        margin: 8,
        borderWidth: 1,

    }),
    dropdown: RX.Styles.createViewStyle({
        height: 30,
        width: 400,
        margin: 8,
    }),

    datePicker: RX.Styles.createViewStyle({
        height: 30,
        width: 100,
        margin: 8

    })
};

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
const FieldTypes = ['TextField', 'AddressField', 'SelectField', 'DatePicker']

export default class FormPanel extends RX.Component {

	render(): JSX.Element {
		return (
            
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    
                    <RX.Text style={ styles.titleText }>
                        Cell Field control built using ReactXP
                    </RX.Text>

                    {jsonData.map((value, key) => <Cell  
                     cellType={value.cellType} fieldLabel={value.fieldLabel} fieldName={value.fieldName} multiline={value.multiline} dataSource = {value.dataSource}/>)}
                
                </RX.View>
            </RX.ScrollView>  

        )


    }    
    private 
        _ongenderChange = (mood: string, itemIndex: number) => {
        		this.setState({ mood: mood }
            );
        } 		

        _onNameChange = (name: string) => {
        		this.setState({ name: name }
            );
        }
        _onAddressChange = (address: string) => {
        		this.setState({ address: address }
            );
        }

     
}
