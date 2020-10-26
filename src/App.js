import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'pages/components/Header';
import Router from 'routes/Router';
import { authorizeThunk } from 'store/main/mainThunks';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useDispatch();
  const authorize = async () => {
    await dispatch(authorizeThunk());
    setIsAuthorized(true);
  };

  useEffect(() => {
    authorize();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isAuthorized) {
    return null;
  }

  return (
    <>
      <Header />

      <Router
        isAuthorized={isAuthorized}
      />
    </>
  );
}

export default App;
