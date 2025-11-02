import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import VentMessage from './VentMessage';
import './VentFeed.css';

const VentFeed = () => {
  const { items } = useAppSelector((state) => state.vents);

  return (
    <section className="vent-feed-section">
      <h2>Community Vents</h2>
      <div className="vent-feed">
        {items.length === 0 ? (
          <p className="empty-state">
            No messages yet. Be the first to share something...
          </p>
        ) : (
          items.map((vent) => <VentMessage key={vent._id} vent={vent} />)
        )}
      </div>
    </section>
  );
};

export default VentFeed;

