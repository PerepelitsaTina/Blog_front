import RegisterForm from 'components/RegisterForm';
import Header from 'pages/components/Header';
import React from 'react';
import Router from 'routes/Router';

function App() {
  return (
    <>
      <Header />
      <RegisterForm />
      <Router />
    </>
  );
}

export default App;
