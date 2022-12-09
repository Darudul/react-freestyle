import React, { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false
        }
        return true;
    }
    render() {
        console.log("button components rendered");
        const { change, locale } = this.props;
        return (
            <div>
                <button type='button' onClick={() => change(locale)}>Click Me</button>
            </div>
        );
    }
}

export default Button;