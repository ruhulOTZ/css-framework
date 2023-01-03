import React from 'react';

function Wrapper({children}) {
    return (
        <div
            style={{
                padding: '20px',
                background: 'var(--main-background-color)',
                marginBottom: '20px',
            }}
        >
            {children}
        </div>
    );
}

export default Wrapper;
