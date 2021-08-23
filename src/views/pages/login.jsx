import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageLoadedLogin } from '../../application/actions/ui';
import LoginForm from '../component/login_form';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
  }, [dispatch]);
  return <LoginForm />;
};

export default Login;
