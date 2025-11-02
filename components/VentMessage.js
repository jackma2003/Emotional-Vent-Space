'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { updateVent, deleteVent, heartVent } from '../store/slices/ventsSlice';
import './VentMessage.css';

const VentMessage = ({ vent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [isHearted, setIsHearted] = useState(false);
  const dispatch = useAppDispatch();

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  };

  const handleEdit = () => {
    setEditText(vent.text);
    setIsEditing(true);
  };

  const handleSave = async () => {
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== vent.text) {
      await dispatch(updateVent({ id: vent._id, text: trimmedText }));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(vent.text);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this vent?')) {
      await dispatch(deleteVent(vent._id));
    }
  };

  const handleHeart = async () => {
    if (!isHearted) {
      setIsHearted(true);
      await dispatch(heartVent(vent._id));
    }
  };

  return (
    <div className="vent-message">
      <div className="vent-message-actions">
        <button onClick={handleEdit} className="edit-btn" title="Edit">
          ✏️
        </button>
        <button onClick={handleDelete} className="delete-btn" title="Delete">
          🗑️
        </button>
      </div>

      {isEditing ? (
        <div className="vent-edit">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            rows="3"
            className="edit-textarea"
          />
          <div className="edit-buttons">
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="vent-message-content">{vent.text}</div>
      )}

      <div className="vent-message-footer">
        <button 
          onClick={handleHeart} 
          className={`heart-btn ${isHearted ? 'hearted' : ''}`}
          disabled={isHearted}
        >
          <span className="heart-icon">{isHearted ? '❤️' : '🤍'}</span>
          <span className="heart-count">{vent.hearts || 0}</span>
        </button>
        <div className="vent-message-time">{formatTimestamp(vent.createdAt)}</div>
      </div>
    </div>
  );
};

export default VentMessage;
