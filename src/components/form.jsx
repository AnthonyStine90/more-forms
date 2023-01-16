import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="card mt-3">
            <div className="card-body">
                <form>

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
                            onChange={(e) => setFirstName(e.target.value)} 
                        />

                    </div>
                    <div class="form-group">

                        <label htmlFor="lastName" class="form-label mt-4">Last Name</label>

                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter Last Name" 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div class="form-group">

                        <label htmlFor="email" class="form-label mt-4">Email</label>

                        <input 
                        type="Email" 
                        class="form-control" 
                        placeholder="Enter Email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div class="form-group">

                        <label htmlFor="password" class="form-label mt-4">Password</label>

                        <input 
                        type="password" 
                        class="form-control"
                        placeholder="Password" 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div class="form-group">

                        <label htmlFor="confirmPassword" class="form-label mt-4">Conform Password</label>

                        <input 
                        type="password" 
                        class="form-control"
                        placeholder="Confirm Password" 
                        id="confirmPassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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