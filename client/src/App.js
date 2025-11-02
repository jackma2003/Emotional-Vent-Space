import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchVents } from './store/slices/ventsSlice';
import Header from './components/Header';
import VentForm from './components/VentForm';
import VentFeed from './components/VentFeed';
import Footer from './components/Footer';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.vents);

  useEffect(() => {
    dispatch(fetchVents());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <VentForm />
        <VentFeed />
      </div>
      <Footer />
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      {error && (
        <div className="error-notification">
          {error}
        </div>
      )}
    </div>
  );
}

export default App;

