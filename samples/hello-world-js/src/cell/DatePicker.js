
import React from 'react';
import RX from 'reactxp';


const DateList: RX.Types.PickerPropsItem[] = [
    {
       label: '1',
       value: 1
    },
    {
        label: '2',
        value: 2
    },
    {
        label: '3',
        value: 3
    },
    {
        label: '4',
        value: 4
    },
    {
        label: '5',
        value: 6
    },
    {
        label: '7',
        value: 7
    },
    {
        label: '8',
        value: 9
    },
    {
        label: '10',
        value: 10
    },

    {
       label: '11',
       value: 11
    },
    {
        label: '12',
        value: 12
    },
    {
        label: '13',
        value: 13
    },
    {
        label: '14',
        value: 14
    },
    {
        label: '15',
        value: 16
    },
    {
        label: '17',
        value: 17
    },
    {
        label: '18',
        value: 19
    },
    {
        label: '20',
        value: 20
    },
    {
       label: '21',
       value: 1
    },
    {
        label: '22',
        value: 22
    },
    {
        label: '23',
        value: 23
    },
    {
        label: '24',
        value: 24
    },
    {
        label: '25',
        value: 26
    },
    {
        label: '27',
        value: 27
    },
    {
        label: '28',
        value: 29
    },
    {
        label: '30',
        value: 30
    }
];

const MonthList: RX.Types.PickerPropsItem[] = [
    {
        label: 'January',
        value: 'January'
    },
    {
        label: 'February',
        value: 'February'
    },
    {
        label: 'March',
        value: 'March'
    },
    {
        label: 'April',
        value: 'April'
    },
    {
        label: 'May',
        value: 'May'
    },
    {
        label: 'June',
        value: 'June'
    },
    {
        label: 'July',
        value: 'July'
    },
    {
        label: 'August',
        value: 'August'
    },
    {
        label: 'September',
        value: 'September'
    },
    {
        label: 'October',
        value: 'October'
    },
    {
        label: 'November',
        value: 'November'
    },
    {
        label: 'December',
        value: 'December'
    }
];

const YearList: RX.Types.PickerPropsItem[] = [
    {
        label: 1990,
        value: 1990
    },
    {
        label: 1991,
        value: 1991
    },
    {
        label: 1992,
        value: 1992
    },
    {
        label: 1993,
        value: 1993
    },
    {
        label: 1994,
        value: 1994
    },
    {
        label: 1995,
        value: 1995
    },
    {
        label: 1996,
        value: 1997
    },
    {
        label: 1998,
        value: 1999
    },
    {
        label: 2000,
        value: 2000
    },
    {
        label: 2001,
        value: 2001
    },
    {
        label: 2002,
        value: 2003
    },
    {
        label: 2004,
        value: 2004
    }
];


export default class DatePicker extends RX.Component{
	constructor(props){
		super(props);
		this.state = {
			date: 1,
			month: 'January',
			year: 1990,
            full_date: 'January, 1 1990'
		}
	}

	render(): JSX.Element {
        var data = this.props.data;
        var styles = this.props.styles;
		return (
                <RX.View>
    				<RX.Text style={styles.LabelText}>{data.fieldLabel}</RX.Text> 
    				<RX.Text numberOfLines={ 500 }>
    	                <RX.Picker name={data.fieldName + "_dd"} style={styles.datePickerDate} items={ DateList } selectedValue={ this.state.date } onValueChange={ this.props.onChange(event)} />
    	                <RX.Picker name={data.fieldName + "_mm"} style={styles.datePickerMonth} items={ MonthList } selectedValue={ this.state.month } onValueChange={ this.props.onChange(event) } />
    	                <RX.Picker name={data.fieldName + "_yy"} style={styles.datePickerYear} items={ YearList } selectedValue={ this.state.year } onValueChange={ this.props.onChange(event) } />
    				</RX.Text>
                </RX.View>
			)
	}

	private 
        _onDateChange = (date, itemIndex) => {
            this.state({date: date })
        }

        _onMonthChange = (month, itemIndex) => {
        	this.setState({ month: month })
        }
        _onYearChange = (year, itemIndex) => {
        	this.setState({ year: year })
        } 	
}