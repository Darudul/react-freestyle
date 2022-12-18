import React from 'react'

const Form = () => {
    // const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.defaultPrevent()
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" />
                </div>
            </form>
        </div>
    )
}

export default Form