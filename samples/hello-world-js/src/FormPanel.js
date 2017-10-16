import React from 'react';
import RX from 'reactxp';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';



const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
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
        backgroundColor: '#7d88a9'
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

    })
};

const pickerItems: RX.Types.PickerPropsItem[] = [
    {
        label: 'Cool',
        value: 'cool'
    },
    {
        label: 'Super',
        value: 'super'
    },
    {
        label: 'Great',
        value: 'great'
    }
];

export default class FormPanel extends RX.Component <null, { name: string, address: string, mood: string }> {

	constructor() {
        super();

        this.state = {
        	name: 'Suneel',
        	address: 'Cubix Inc',
            mood: 'cool'
        }
    }

	render(): JSX.Element {
		return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateBack }>
                        <RX.Text style={ styles.buttonText }>
                            Go Back
                        </RX.Text>
                    </RX.Button>

                    <RX.Text style={ styles.titleText }>
                        Here is a simple form control built using ReactXP
                    </RX.Text>

                    <RX.TextInput placeholder="First Name" defaultValue={this.state.name} onChangeText={this._onNameChange}  style={styles.textInput} /> 

                    <RX.TextInput placeholder="Address" multiline="true" defaultValue={this.state.address} onChangeText={this._onAddressChange}  style={[styles.textInput]} />

                    <RX.Text numberOfLines={ 5 }>
		                <RX.Text> { 'Choose your mood? ' } </RX.Text>
		                <RX.Picker
		                    items={ pickerItems }
		                    selectedValue={ this.state.mood }
		                    onValueChange={ this._onMoodChange }
		                />
		            </RX.Text>

		            <RX.Text style={ styles.titleText }>
                        Hello Mr. {this.state.name}
                    </RX.Text>

                    <RX.Text style={ styles.titleText }>
                        Address. {this.state.address}
                    </RX.Text>

                    <RX.Text style={ styles.titleText }>
                        Your are in {this.state.mood} mood.
                    </RX.Text>
	


                </RX.View>
            </RX.ScrollView>        
        )


    }    
    private 
    	_onMoodChange = (mood: string, itemIndex: number) => {
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
