import React from 'react';
import { Btn } from '../../utils/material/button';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserStatus } from '../../redux/authorization/authorization.actions';

const LoginLogout = ({ isAdmin, onchangeUserStatus }) => {
    return (
        <>
            {isAdmin ? (
                <Btn
                    variant="contained"
                    color="primary"
                    startIcon={<SupervisorAccountIcon />}
                    onClick={() => onchangeUserStatus(false)}
                >
                    Admin
                </Btn>
            ) : (
                <Btn
                    variant="contained"
                    color="default"
                    startIcon={<PersonIcon />}
                    onClick={() => onchangeUserStatus(true)}
                >
                    User
                </Btn>
            )}
        </>
    );
};

export const LoginLogoutContainer = () => {
    const dispatch = useDispatch();
    const { isAdmin } = useSelector(state => state.authorization);
    const onchangeUserStatus = bool => {
        dispatch(changeUserStatus(bool));
    };

    return <LoginLogout isAdmin={isAdmin} onchangeUserStatus={onchangeUserStatus} />;
};
