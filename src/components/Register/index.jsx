import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signupUser } from '../../store/register/action';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { renderField } from '../CommonComponents/ReduxFormFields';
import { reduxForm } from 'redux-form';
import validate from '../../utils/validation';
import '../Login/style.scss';

const Register = (props) => {
    const onSubmit = (user) => {
        const { dispatch } = props;
        dispatch(signupUser(user));
    };
    const { isAuthenticated, handleSubmit, invalid, isSignupIn } = props;
    if (isAuthenticated) {
        return <Redirect to='/' />;
    } else {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                        <div className='card card-signin my-5'>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>Реєстрація</h5>
                                <form className='form-signin' onSubmit={handleSubmit(onSubmit)}>
                                    <div className='form-label-group'>
                                        <Field
                                            type='name'
                                            name='firstName'
                                            className='form-control'
                                            placeholder={'Ім\'я'}
                                            component={renderField}
                                        />
                                    </div>
                                    <div className='form-label-group'>
                                        <Field
                                            type='name'
                                            name='lastName'
                                            className='form-control'
                                            placeholder='Прізвище'
                                            component={renderField}
                                        />
                                    </div>
                                    <div className='form-label-group'>
                                        <Field
                                            type='email'
                                            name='email'
                                            id='inputEmail'
                                            className='form-control'
                                            placeholder='Email'
                                            component={renderField}
                                        />
                                    </div>
                                    <div className='form-label-group'>
                                        <Field
                                            type='password'
                                            name='password'
                                            id='inputPassword'
                                            className='form-control'
                                            placeholder='Пароль'
                                            component={renderField}
                                            label='Пароль'
                                        />
                                    </div>
                                    <button className='btn btn-lg btn-primary btn-block text-uppercase' disabled={isSignupIn || invalid}>
                                        {isSignupIn ? 'Зачекайте' : 'Зареєструватися'}
                                    </button>
                                    <hr className='my-4' />
                                    <div className='text-center'>
                                        <Link to='/login'>У вас вже є аккаунт?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        isSignupIn: state.register.isSignupIn,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'registerForm',
        validate,
    })(Register),
);