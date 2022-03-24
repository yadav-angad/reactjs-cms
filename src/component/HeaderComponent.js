import React from 'react';
import UserIcon from '../images/user.png';

export default function HeaderComponent() {
    return (
        <div className='App-header'>
            <div>
                <span>Customer Management System</span>
            </div>
            <div>
                <img src={UserIcon} alt="User" style={{ width: '40px', margin: 'auto', display: 'block' }} />
            </div>
        </div>
    );
}