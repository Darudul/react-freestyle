import React from 'react'
import Clock from './Clock'

const ClockList = ({ quantities }) => {
    return (
        <div>
            {quantities.map(key => (
                <Clock key={key} />
            ))}
        </div>
    )
}

export default ClockList