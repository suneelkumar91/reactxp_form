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
    })
}

module.exports = styles;