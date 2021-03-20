import React, { memo } from 'react';

import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import useStyles from "./style";

function ButtonLoader({ color, disabled, fullWidth, isLoading, children, type, className, clickHandler, ...other }) {
    const classes = useStyles({ fullWidth });

    return (
        <Button
            color="secondary"
            disabled={isLoading || disabled}
            fullWidth={fullWidth}
            type={type}
            onClick={clickHandler}
            variant="contained"
            className={`${classes.buttonWrapper} ${className}`}
            {...other}
        >
            {children}

            {isLoading && (
                <LinearProgress
                className={classes.loader}
                    color={color}
                    classes={{
                      barColorPrimary: classes.barColorPrimary,
                      barColorSecondary: classes.barColorSecondary,
                    }}
                />
            )}
        </Button>
    );
}

export default memo(ButtonLoader);
