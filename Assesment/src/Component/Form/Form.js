import React, { Component } from 'react'
import Axios from '../../axios';
import FormCmp from './FormCmp';

export class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        errors: "",
        success: false,
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            const body = {
                email: email,
                password: password
            }
            Axios.post("register", body)
                .then(res => {
                    const resp = res.data;
                    document.getElementById("form").reset();
                    this.setState({
                        email: "",
                        password: "",
                        firstname: "",
                        lastname: "",
                        success: true
                    })
                    alert("Successfully registered")
                })
                .catch(err => {
                    const errMsg = err.response?.data?.error
                    this.setState({
                        errors: errMsg
                    });
                    setTimeout(() => {
                        this.setState({
                            errors: ""
                        });
                    }, 3000);
                })
        } else {
            this.setState({
                errors: "All fields required"
            });
            setTimeout(() => {
                this.setState({
                    errors: ""
                });
            }, 3000);
        }
    }

    reset = () => {
        this.setState({
            success: false
        });
    }

    render() {
        const { errors, success } = this.state;
        return (
            <div>
                {errors
                    ? <div className="toastr">
                        {errors}
                    </div>
                    : (null)}
                <header>
                    <h1 className="logo">LOGO</h1>
                </header>
                <div className="main">
                    {success
                        ? <div className="success">
                            <h1>Successfully Registered</h1>
                            <button className="reset" onClick={this.reset}>Regsiter</button>
                        </div>
                        : <FormCmp
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />}
                </div>
            </div>

        )
    }
}

export default Form
