import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './Input';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <InputField
                            label="Email Address"
                            name="email"
                            type="email"
                            error=""
                            />
                            <InputField
                            label="Password"
                            name="password"
                            type="password"
                            error=""
                            />

                            <div className="row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
