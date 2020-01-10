import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../store/auth/action';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { renderField } from '../CommonComponents/ReduxFormFields';
import { reduxForm } from 'redux-form';
import validate from '../../utils/validation';
import './style.scss';

const Login = (props) => {
    const onSubmit = (user) => {
        const { dispatch } = props;
        dispatch(loginUser(user));
    };
    const { isAuthenticated, handleSubmit, invalid, isLoggingIn } = props;
    if (isAuthenticated) {
        return <Redirect to='/' />;
    } else {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                        <div className='card card-signin my-5'>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>Авторизація</h5>
                                <form className='form-signin' onSubmit={handleSubmit(onSubmit)}>
                                    <div className='form-label-group'>
                                        <Field
                                            type='email'
                                            name='email'
                                            id='inputEmail'
                                            className='form-control'
                                            placeholder='Email'
                                            component={renderField}
                                            required
                                            autoFocus />
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
                                            required />
                                    </div>

                                    <div className='mb-3'>
                                        <Link to='#' className='pt-2'>Забули пароль?</Link>
                                    </div>
                                    <button className='btn btn-lg btn-primary btn-block text-uppercase' disabled={isLoggingIn || invalid}>
                                        {isLoggingIn ? 'Зачекайте' : 'Увійти'}
                                    </button>
                                    <hr className='my-4' />
                                    <div className='text-center'>
                                        <Link to='/register'>У вас ще немає аккаунта?</Link>
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
        isLoggingIn: state.auth.isLoggingIn,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'loginForm',
        validate,
    })(Login),
);