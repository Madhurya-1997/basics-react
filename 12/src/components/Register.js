import React, { Component } from 'react';
import '../styles/Register.css';




class RegisterForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: ""
    }

    validate = () => {

        let nameError = "";
        let emailError = "";
        let passwordError = "";

        if (this.state.name.length < 5) {
            nameError = "Name cannot be less than 5 characters";
        }

        if (!this.state.email.includes('@')) {
            emailError = "Email should include @";
        }
        if (this.state.password.length < 8) {
            passwordError = "Password cannot be less than 8 characters"
        }

        if (nameError || emailError || passwordError) {
            this.setState({ nameError, emailError, passwordError });
            return false;
        }
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState({
                nameError: "",
                emailError: "",
                passwordError: ""
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {

        const style = {
            fontSize: "12px",
            color: "red"
        }

        return (
            <div className="container">
                <h1 style={{ fontSize: "30px", color: "red" }}>Register Here!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="InputFields">
                        <label for="name">Name: </label>
                        <input
                            style={{ padding: "8px", width: "200px" }}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="enter your name..."
                            onChange={this.handleChange} />

                        <div style={style}>
                            {this.state.nameError}
                        </div>
                    </div>

                    <div className="InputFields">
                        <label for="email">Email: </label>
                        <input
                            style={{ padding: "8px", width: "200px" }}
                            id="email"
                            name="email"
                            placeholder="enter your email..."
                            onChange={this.handleChange} />
                        <div style={style}>
                            {this.state.emailError}
                        </div>
                    </div>

                    <div className="InputFields">
                        <label for="password">Password: </label>
                        <input
                            style={{ padding: "8px", width: "200px" }}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="enter your password..."
                            onChange={this.handleChange} />
                        <div style={style}>
                            {this.state.passwordError}
                        </div>
                    </div>
                    <button type="submit"
                        style={
                            {
                                padding: "8px 30px",
                                margin: "20px",
                                color: "white",
                                backgroundColor: "teal",
                                outline: "none",
                                border: "2px solid teal",
                                borderRadius: "10%",
                                boxShadow: "0 2px 3px grey",
                                cursor: "pointer"
                            }
                        }>SUBMIT !</button>

                </form>
            </div>

        );
    }
}


export default RegisterForm;