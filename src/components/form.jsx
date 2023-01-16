import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    // conditionals--error messages
    const [firstNameErrors, setFirstNameErrors] = useState('');
    const [lastNameErrors, setLastNameErrors] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState('');

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleSubmit = (e) => {
        // prevents form from refreshing
        e.preventDefault();
        setHasBeenSubmitted(true);
        const user = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };
        // use spread to add new user to the array, prevents replacing existing user over and over
        setUsers([...users, user])
        // resets all the values after the form is submitted
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameErrors("First Name must be at least 2 characters.")
        } else {
            setFirstNameErrors("")
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameErrors("Last name must be at least 2 characters.")
        } else {
            setLastNameErrors("")
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailErrors("Email must be at least 2 characters.")
        } else {
            setEmailErrors("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordErrors("Password must be at least 8 characters")
        } else {
            setPasswordErrors("")
        }
    }

    // const passwordMatch = (e) => {
    //     setPassword(e.target.value);
    //     if (e.target.value !== confirmPassword(e.target.value))
    //         setPasswordErrors("Passwords must match.")
    // }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordErrors("Passwords must match.")
        } else {
            setConfirmPasswordErrors("")
        }
    }



    return (
        <div className="card mt-4">
            <div className="card-body">
                {/* on call function for a form submit */}
                <div className="d-flex justify-content-center">
                    {/* ternary statement (if else) */}
                    {hasBeenSubmitted
                        ? "Thank you for submitting the form."
                        : "Please fill out the entire form."
                    }
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>

                    <div className="form-group">
                        {/* htmlFor activates the input on the label or the input. htmlFor value has to match input */}
                        <label htmlFor="firstName" class="form-label mt-4">First Name</label>
                        {/* use onChange listener for text inputs. needs to be in a callback function to invoke */}
                        {/* e is short for event. use the event in the argument of the function */}
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter First Name"
                            id="firstName"
                            value={firstName}
                            // the target is what is recieving the event. in this case firstName is the target 
                            onChange={firstNameHandler}
                        />
                        {/* javascript evaluates on truthy(yes) or falsey(no) null=falsey */}
                        {firstNameErrors && (
                            <span className="form-text text-danger">{firstNameErrors}</span>
                        )}
                    </div>

                    <div class="form-group">

                        <label htmlFor="lastName" class="form-label mt-4">Last Name</label>

                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Last Name"
                            id="lastName"
                            value={lastName}
                            onChange={lastNameHandler}
                        />
                        {lastNameErrors && (
                            <span className="form-text text-danger">{lastNameErrors}</span>
                        )}
                    </div>

                    <div class="form-group">

                        <label htmlFor="email" class="form-label mt-4">Email</label>

                        <input
                            type="Email"
                            class="form-control"
                            placeholder="Enter Email"
                            id="email"
                            value={email}
                            onChange={emailHandler}
                        />
                        {emailErrors && (
                            <span className="form-text text-danger">{emailErrors}</span>
                        )}
                    </div>

                    <div class="form-group">

                        <label htmlFor="password" class="form-label mt-4">Password</label>

                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={passwordHandler}
                        />
                        {passwordErrors && (
                            <span className="form-text text-danger">{passwordErrors}</span>
                        )}
                        
                    </div>

                    <div class="form-group">

                        <label htmlFor="confirmPassword" class="form-label mt-4">Conform Password</label>

                        <input
                            type="password"
                            class="form-control"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={confirmPasswordHandler}
                        />
                        {confirmPasswordErrors && (
                            <span className="form-text text-danger">{confirmPasswordErrors}</span>
                        )}
                    </div>

                    {/* submit button needs type="submit" to use a handler */}
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-info mt-4">Submit</button>
                    </div>
                </form>
            </div>
            {/* second div to display real time inputs */}

            <div className="card-body">
                <h1>Your Form Data</h1>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm password: {confirmPassword}</p>
            </div>
        </div>

    );
}

export default Form