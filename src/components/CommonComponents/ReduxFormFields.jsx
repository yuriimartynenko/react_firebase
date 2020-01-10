import React from 'react';

export const renderField = ({
                                input,
                                type,
                                className,
                                placeholder,
                                meta,
                            }) => (
    <>
        <input
            className={className}
            placeholder={placeholder}
            {...input}
            type={type}
        />
        {meta.error && meta.touched && (
            <span className='text-danger'>{meta.error}</span>
        )}
    </>
);