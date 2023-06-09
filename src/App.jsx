import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className='my-container min-h-[calc(100vh-150px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;