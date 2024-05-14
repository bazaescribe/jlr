import React, { useState, useEffect } from 'react';
import './OverlayCard.css';

const OverlayCard = ({ isOpen, onClose, children }) => {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setTimeout(() => setAnimate(true), 10); // Slight delay to trigger CSS transition
        } else {
            setAnimate(false);
            setTimeout(() => setVisible(false), 500); // Delay to allow animation to finish
        }
    }, [isOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`overlay ${animate ? 'show' : ''}`} style={{ display: visible ? 'flex' : 'none' }} onClick={handleOverlayClick}>
            <div className="card d-flex flex-direction-column gap-050">
                {children}
                <button onClick={onClose} className='btn danger'>Close</button>
            </div>
        </div>
    );
};

export default OverlayCard;