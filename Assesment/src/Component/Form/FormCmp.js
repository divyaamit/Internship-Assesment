import React from 'react'

const FormCmp = (props) => {
    return (
        <form className="form" id="form" onSubmit={props.handleSubmit}>
            <p className="heading">SIGN UP</p>
            <h2 className="title">Create your account</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="accounts">
                <button type="button" className="btn-account">
                    <img src="images/google.svg" alt="GOOGLE" />
                GOOGLE
                </button>
                <button type="button" className="btn-account">
                    <img className="img-btn" src="images/facebook.svg" alt="FACEBOOK" />
                FACEBOOK
                </button>
            </div>
            <div className="line">
                <hr className="hop-hr" />
                <span className="or">Or</span>
            </div>
            <div className="form-group">
                <input type="text" name="firstname" onChange={props.handleChange} className="inp" placeholder="First Name" required />
            </div>
            <div className="form-group">
                <input type="text" name="lastname" onChange={props.handleChange} className="inp" placeholder="Last Name" required />
            </div>
            <div className="form-group">
                <input type="email" name="email" onChange={props.handleChange} className="inp" placeholder="email" required />
            </div>
            <div className="form-group">
                <input type="password" name="password" onChange={props.handleChange} className="inp" placeholder="password" required />
            </div>
            <p className="text">
                By clicking Sign Up, you agree to our
            <a href>Terms of Use</a>
            and our
            <a href>Privacy Policy</a>
            </p>
            <button type="submit" className="login-btn">SIGN UP</button>
        </form>
    )
}

export default FormCmp;
