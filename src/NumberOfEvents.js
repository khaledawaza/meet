import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        NOE: this.props.NOE || 32,
        infoText: '',
    }

    onChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue <= 0 | inputValue > 32) {
            this.setState({ infoText: 'Please select the number from 1 to 32.' })
        } else {
            this.setState({ NOE: inputValue, infoText: '' });
            this.props.updateEvents(null, inputValue)
        }
    }

    render() {
        return (
            <div className='NOE'>
                <label for='number-of-events'>number of events: </label>
                <input
                    className='number'
                    type="number"
                    value={this.state.NOE}
                    onChange={this.onChange}
                />
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    };
};


export default NumberOfEvents;