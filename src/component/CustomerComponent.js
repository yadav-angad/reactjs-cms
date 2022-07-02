import React from 'react';

export default function CustomerComponent() {
    return (
        <div>
            <div className='flexDisplayRow'>
                <div className='flexDisplayColumn'>
                    <span>UserName</span>
                    <input type="text" name='userName' value=''/>
                </div>
                <div className='flexDisplayColumn'>
                    <span>First Name</span>
                    <input type="text" name='firstName' value=''/>
                </div>
                <div className='flexDisplayColumn'>
                    <span>Last Name</span>
                    <input type="text" name='lastName' value=''/>
                </div>
            </div>
        </div>
    )
}