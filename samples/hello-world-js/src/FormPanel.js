import React from 'react';
import RX from 'reactxp';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';
import DatePicker from './DatePicker';

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

export default class FormPanel extends RX.Component <null, { name: string, address: string, mood: string }> {

	constructor() {
        super();

        this.state = {
        	name: 'Suneel',
        	address: 'Cubix Inc',
            gender: 'male'
        }
    }

	render(): JSX.Element {
		return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    

                    <RX.Text style={ styles.titleText }>
                        Here is a simple form control built using ReactXP
                    </RX.Text>
                    <RX.Text> Full Name  </RX.Text>    
                    <RX.TextInput placeholder="Full Name" defaultValue={this.state.name} onChangeText={this._onNameChange}  style={styles.textInput} /> 
                    <RX.Text> Address </RX.Text>    
                    <RX.TextInput placeholder="Address" multiline="true" defaultValue={this.state.address} onChangeText={this._onAddressChange}   style={[styles.addressInput]} />

                    <RX.Text> { 'Gender' } </RX.Text>
                    <RX.Text numberOfLines={ 500 }>
		                <RX.Picker style={styles.dropdown}
		                    items={ pickerItems }
		                    selectedValue={ this.state.gender }
		                    onValueChange={ this._ongenderChange }
		                />
		            </RX.Text>


                    <DatePicker styles={styles} />  
	

                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateBack }>
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
