import React from 'react'

const Loading = () => {

    return (
        <div className="loading-container">
        <div className="spinner" />
        <div className='logo' />
        <style jsx>{`
            .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
            }
            .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #ff7b00;
            border-radius: 50%;
            width: 160px;
            height: 160px;
            animation: spin 1s linear infinite;
            }
            .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 140px;
            height: 140px;
            background-image: url('https://raw.githubusercontent.com/Sridip-99/Annapurna-Store/refs/heads/main/src/assets/images/logo.png');
            background-size: cover;
            background-position:center;
            }
            @keyframes spin {
            to {
                transform: rotate(360deg);
            }
            }
        `}</style>
        </div>
    )
}

export default Loading