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
        const { change, locale, show } = this.props;
        return (
            <div>
                <button type='button' onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন '}
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}

export default Button;