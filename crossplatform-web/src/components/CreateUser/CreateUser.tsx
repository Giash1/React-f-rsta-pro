import React, { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import styles from './CreateUser.module.scss';
import { useCreateUserMutation } from '../../store/api/usersApi';
// import { UserList } from '../UserList'


// a functional React component called CreateUser
export const CreateUser = () => {
    // bring createUser function from usersApi
    const [createUser] = useCreateUserMutation();
    // declare a state variable
    //  the current state (firstName......), and the function that lets you update it (setFirstName.........).
    //  You can give them any names, but the convention is to write[something, setSomething].
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [feedback, setFeedback] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submitHandler = () => {
        //  submitHandler function, which will be executed when the submit button is clicked
        console.log(firstName)
        console.log(lastName)
        //  conditional rendaring
        if (firstName !== '' && lastName !== '') {
            setFeedback(`Hej ${firstName} ${lastName},välkommen`)
            setSubmitted(true)
            setFirstName('')
            setLastName('')
            setTimeout(() => {
                // After 5 seconds, this code resets the feedback state to an empty string, removing the welcome message.
                setFeedback('')
            }, 5000)

            createUser({
                user: {
                    firstName: firstName,
                    lastName: lastName
                }
            })
                .unwrap()
                .then(() => {
                    
                })
        } else {
            setSubmitted(false)
            setFeedback('Du måste fylla i alla falt')
        }
    }

    //  creating a function for clear input
    const clearInput = () => {
        setFirstName('')
        setLastName('')
    }
    //  rendering the JSX (UI) of the component.
    return (
        <div className={styles.container}>
            <TextInput
                //  bring all the props from child component textinput.tsx
                //  childComponent={
                //      <button>Next</button>
                //  }
                onButtonClick={() => console.log('button clicked')}
                onButtonClickClear={() => clearInput()}
                //  sent this props to the childcomponent
                styling={{}}
                // passed placeholder and value props along with onInput event handlers to manage their values.
                placeholder="Firstname"
                value={firstName}
                //  bring setLastName props from childcomponent
                setLastName={(value) => setLastName(value)}
                onInput={(event) => setFirstName(event.target.value)}
            />
            <TextInput
                styling={{}}
                // passed placeholder and value props along with onInput event handlers to manage their values.
                placeholder="Lastname"
                value={lastName}
                onInput={(event) => setLastName(event.target.value)}
            />
            {/* a button with an onClick event handler that calls the submitHandler function when clicked. */}
            <button className={styles.createButton} onClick={submitHandler}>
                Press me
            </button>

            {/* The color is set to green if the form has been successfully submitted (based on the submitted state) and red otherwise.
            The content is derived from the feedback state variable. */}
            <p style={{ color: submitted ? 'green' : 'red' }}>{feedback}</p>
            {/* <UserList /> */}
        </div>
    )
}

// export default CreateUser
