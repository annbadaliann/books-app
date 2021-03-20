import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function InputErrorMessage({ errors, fieldName }) {

    return (
        <ErrorMessage
            errors={errors}
            name={fieldName}
            render={({ message }) => <p>{message}</p>}
        />
    );
}

export default InputErrorMessage;
