import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NotificationManager } from 'react-notifications';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import InputField from '../../components/InputField/InputField';
// import ButtonLoader from '../../components/ButtonLoader/ButtonLoader';
// import { emailValidator } from '../../helper';
// import useGlobal from '../../store/store';
// import Logo from '../../resources/icons/Logo';

import { schema } from './validationSchema';

import useStyles from './style';
import InputField from '../../../components/InputField/InputField';
import ButtonLoader from '../../../components/ButtonLoader/ButtonLoader';


export default function SignIn() {
    // const [{}, { login }] = useGlobal();s

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const history = useHistory();
    const classes = useStyles();


    const onSubmit = (formData) => {
        setIsLoading(true);

        // login(formData).then((res) => {
        //     if (res && res.success) {
        //         if(res.role === 'Admin') {
        //             history.push('/dashboard/users');
        //         } else {
        //             history.push('/dashboard/deliveries');
        //         }
        //     } else {
        //         NotificationManager.error(res.message);
        //     }
        // }).finally(() => {
        //     setIsLoading(false);
        // });

    };

    return (
                 
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Box mb={2}>
                            <InputField
                                label="էլ․ հասցե"
                                fieldName={'email'}
                                name={'email'}
                                inputRef={register({
                                    required: 'Պարտադիր դաշտ',
                                    pattern: {
                                        // value: emailValidator(),
                                        message: 'էլ․ հասցեն անվավեր է',
                                    },
                                })}
                                type="email"
                                errorMessage={errors}
                                error={!!errors.email}
                                fullWidth
                            />
                        </Box>
                        <Box mb={1}>
                            <InputField
                                label="Գաղտնաբառ"
                                fieldName={'password'}
                                name={'password'}
                                inputRef={register({
                                    required: 'Պարտադիր դաշտ',
                                })}
                                type="password"
                                errorMessage={errors}
                                error={!!errors.password}
                                fullWidth
                                showIcon
                                inputProps={{ maxLength: 30}}
                            />
                        </Box>
                        <Box mt={2}>
                             <ButtonLoader
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                // className={classes.submit}
                                // isLoading={isLoading}
                            >
                                Մուտք
                            </ButtonLoader> 
                        </Box>
                    </form>
    );
}
