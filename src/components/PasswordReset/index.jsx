import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { passwordReset } from '../../store/passwordReset/action';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { renderField } from '../CommonComponents/ReduxFormFields';
import { reduxForm } from 'redux-form';
import validate from '../../utils/validation';
import '../Login/style.scss';

const PasswordReset = (props) => {
    const onSubmit = (user) => {
        const { dispatch } = props;
        dispatch(passwordReset(user));
    };
    const { isAuthenticated, handleSubmit, invalid, isPasswordReset } = props;
    if (isAuthenticated) {
        return <Redirect to='/' />;
    } else {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                        <div className='card card-signin my-5'>
                            <div className='card-body'>
                                <h5 className='card-title text-center'>Відновити пароль</h5>
                                <form className='form-signin' onSubmit={handleSubmit(onSubmit)}>
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
                                    <button className='btn btn-lg btn-primary btn-block text-uppercase' disabled={isPasswordReset || invalid}>
                                        {isPasswordReset ? 'Зачекайте' : 'Відправити'}
                                    </button>
                                    <hr className='my-4' />
                                    <div className='text-center'>
                                        <Link to='/login'>Назад</Link>
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
        isPasswordReset: state.passwordReset.isPasswordReset,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(
    reduxForm({
        form: 'passwordResetForm',
        validate,
    })(PasswordReset),
);