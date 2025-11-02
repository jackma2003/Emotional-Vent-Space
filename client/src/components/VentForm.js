import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { createVent } from '../store/slices/ventsSlice';
import './VentForm.css';

const VentForm = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (trimmedText) {
      try {
        await dispatch(createVent(trimmedText));
        setText('');
      } catch (error) {
        console.error('Error creating vent:', error);
      }
    }
  };

  return (
    <section className="vent-form-section">
      <h2>Share Your Thoughts</h2>
      <form className="vent-form" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind? This is a judgment-free space..."
          rows="5"
          required
        />
        <button type="submit" className="submit-btn">
          Release
        </button>
      </form>
    </section>
  );
};

export default VentForm;

