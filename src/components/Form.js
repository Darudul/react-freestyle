import React, { useReducer } from 'react'

const Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        quantity: 0,
        feedback: "",
        term: true,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,

                }
            default:
                return state
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.defaultPrevent()
        console.log(state)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <h1>Gender</h1>
                    <div>
                        <div>
                            <input type="radio" name="gender" value='male' />
                            <label for='male'>Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value='male' />
                            <label for='male'>Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value='other' />
                            <label for='other'>Other</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label for='education'>Education</label>
                    <select name="education" id="education">
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="underGrad">Under Graduate</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </div>
                <div>
                    <label>Number of PCs</label>
                    <div>
                        <button>-</button>
                        <div>
                            <span>0</span>
                        </div>
                        <button>+</button>
                    </div>
                </div>
                <div>
                    <label for='feedback'>Feedback</label>
                    <textarea name="feedback" id="feedback" cols="30" rows="4"></textarea>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name='term' id='terms' />
                        <label for="terms">I agree to terms and conditions</label>
                    </div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Form