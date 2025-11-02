'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchVents, clearSuccess, clearError } from '../store/slices/ventsSlice';
import Header from '../components/Header';
import VentForm from '../components/VentForm';
import VentFeed from '../components/VentFeed';
import Footer from '../components/Footer';

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, error, successMessage } = useAppSelector((state) => state.vents);

  useEffect(() => {
    dispatch(fetchVents());
  }, [dispatch]);

  // Auto-dismiss success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess());
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage, dispatch]);

  // Auto-dismiss error messages
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

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
      {successMessage && (
        <div className="success-notification">
          <div className="notification-icon">
            ✅
          </div>
          <div className="notification-message">
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
}

