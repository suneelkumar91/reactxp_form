import React from 'react';
import RX from 'reactxp';


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

    datePickerDate: RX.Styles.createViewStyle({
        height: 30,
        width: 75,
        margin: 8

    }),
    datePickerMonth: RX.Styles.createViewStyle({
        height: 30,
        width: 150,
        margin: 8

    }),
    datePickerYear: RX.Styles.createViewStyle({
        height: 30,
        width: 150,
        margin: 8

    }),
    LabelText: RX.Styles.createViewStyle({
        fontSize: 14,
        textAlign: 'left',
        margin: 5
    })
};


module.exports = styles;