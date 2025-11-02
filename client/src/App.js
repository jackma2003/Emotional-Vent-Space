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

  // Format error message for display
  const getErrorMessage = () => {
    if (typeof error === 'object' && error !== null && error.message) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'An error occurred';
  };

  // Check if error is a moderation block
  const isModerationError = typeof error === 'object' && error !== null && error.blocked;

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
        <div className={isModerationError ? 'moderation-notification' : 'error-notification'}>
          <div className="notification-icon">
            {isModerationError ? '🚫' : '⚠️'}
          </div>
          <div className="notification-message">
            {getErrorMessage()}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

