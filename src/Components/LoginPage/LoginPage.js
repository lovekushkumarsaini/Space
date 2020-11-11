import React, { Component } from 'react'
import './LoginPage.css'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const phoneNumberRegex = RegExp (/^[2-9]\d{2}[2-9]\d{2}\d{4}$/)

const formValid = ( { formErrors, ...rest }) => {
    let valid = true;
    
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
         val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val=== null && (valid = false)
    });

    return valid;
};

class LoginPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: null,
             email: null,
             phoneNumber: null,
             password: null,
             formErrors:{
                 name: '',
                 email: '',
                 phoneNumber: '',
                 password: ''
            }

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit= e => {
        e.preventDefault();

        if(formValid(this.state)){
            console.log(`
                --SUBMITTING--
                Name: ${this.state.name}
                Email: ${this.state.email}
                Phone Number: ${this.state.phoneNumber}
                Password: ${this.state.password}
            `);
        } else{
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    }; 

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

       

        switch(name) {
            case 'name': 
              formErrors.name = value.length < 3 ?
              'minimum 3 characaters required' : '';
            break;

            case 'email': 
              formErrors.email = emailRegex.test(value) ?
              '' : 'Invalid email address';
            break;

            case 'phoneNumber': 
              formErrors.phoneNumber = phoneNumberRegex.test(value) ?  
              '' : 'Invalid Phone number';
            break;

            case 'password': 
              formErrors.password = value.length < 6  ?
              'minimum 6 characaters required' : '';
            break;

            default:
                break;

        }

        this.setState({ formErrors, [name]: value}, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className='wrapper'>
                <div className='wrapperr'>
                    
                    <div className='log'>
                        <h2>Have an account?</h2>
                        <button type='log in'>log In</button>
                    </div>
                    <div className='form-wrapper'>
                    <h1> Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                     <div className='name'>
                         <label htmlFor='name'>Name</label>
                         <input
                            type='text'
                            className={formErrors.name.length > 0 ? 'error' : null}
                            placeholder='Name'
                            name= 'Name'
                            noValidate
                            onChange={this.handleChange} 
                         />
                         {formErrors.name.length > 0 && ( 
                          <span className='errorMessage'>{formErrors.name}</span>
                          )}
                     </div>
                     
                     <div className='email'>
                         <label htmlFor='email'>Email</label>
                         <input
                            type='email'
                            className={formErrors.email.length > 0 ? 'error' : null}
                            placeholder='Email'
                            name= 'email'
                            noValidate
                            onChange={this.handleChange} 
                         />
                         {formErrors.email.length > 0 && ( 
                        <span className='errorMessage'>{formErrors.email}</span>
                        )}
                     </div>
                     

                     <div className='phoneNumber'>
                         <label htmlFor='phoneNumber'>Phone Number</label>
                         <input
                            type='text'
                            className={formErrors.phoneNumber.length > 0 ? 'error' : null}
                            placeholder='Phone Number'
                            name= 'phoneNumber'
                            noValidate
                            onChange={this.handleChange} 
                         />
                        {formErrors.phoneNumber.length > 0 && ( 
                        <span className='errorMessage'>{formErrors.phoneNumber}</span>
                        )}

                     </div>
                     

                     <div className='password'>
                         <label htmlFor='password'>Password</label>
                         <input
                            type='password'
                            className={formErrors.password.length > 0 ? 'error' : null}
                            placeholder='Password'
                            name= 'password'
                            noValidate
                            onChange={this.handleChange} 
                         />
                         {formErrors.password.length > 0 && ( 
                         <span className='errorMessage'>{formErrors.password}</span>
                         )}
                     </div>
                     <div className='createAccount'>
                        <button type='submit'>Create Account</button>
                        <small>Already Have an Account </small>
                     </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
