import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from './utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        }


        setUserName('');
        setMessage('')

        setEmail('');
        alert(`Hello ${userName}, your email has been sent!`);
    };

    return (
        <div className="container">
            <div className='form-container'>

                <h1 className='mb-3'>Contact</h1>
                <form className="form" onSubmit={handleFormSubmit}>
                    <label htmlFor="userName">Your name:</label>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Your name"
                        id="user-name"
                    />
                    
                    <label htmlFor="email">Email: </label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                        id="email"
                    />
                    {errorMessage && (
                        <div>
                            <p className="error-text text-danger">{errorMessage}</p>
                        </div>
                    )}
                    {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
                    <label htmlFor="message">Message:</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="textarea"
                        placeholder="message"
                        id="message-text"
                    />
                    {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
                    <button type="submit" id="submit-button">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Form;
