import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Loading from 'react-fullscreen-loading';
import Login from './views/pages/login';
import ui from './application/selectors/ui';
import { pageLoadedLogin } from './application/actions/ui';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(ui.getLoading);
  useEffect(() => {
    dispatch(pageLoadedLogin);
  }, [dispatch]);
  if (loading) {
    return <Loading loading background="rgba(0, 0, 0, 0.39)" loaderColor="#3498db" />;
  }
  return (
    <div>
      <Login />;
    </div>
  );
}

export default App;
