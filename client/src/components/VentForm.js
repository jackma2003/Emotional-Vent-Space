import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { createVent } from '../store/slices/ventsSlice';
import './VentForm.css';

const VentForm = () => {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const dispatch = useAppDispatch();

  // Common emojis for emotional expression
  const commonEmojis = [
    '😊', '😔', '😢', '😤', '😴', '😰', '😡', '😌',
    '😍', '🥳', '😭', '😕', '🤗', '🤔', '❤️', '💔',
    '✨', '🌟', '💪', '🙏', '🌈', '☀️', '🌙', '🌟'
  ];

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

  const insertEmoji = (emoji) => {
    setText(text + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <section className="vent-form-section">
      <h2>Share Your Thoughts</h2>
      <form className="vent-form" onSubmit={handleSubmit}>
        <div className="textarea-wrapper">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind? This is a judgment-free space..."
            rows="5"
            required
          />
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="emoji-btn"
            title="Add emoji"
          >
            😊
          </button>
        </div>
        
        {showEmojiPicker && (
          <div className="emoji-picker">
            <div className="emoji-grid">
              {commonEmojis.map((emoji, index) => (
                <button
                  key={index}
                  type="button"
                  className="emoji-option"
                  onClick={() => insertEmoji(emoji)}
                  title={emoji}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <button type="submit" className="submit-btn">
          Release
        </button>
      </form>
    </section>
  );
};

export default VentForm;
