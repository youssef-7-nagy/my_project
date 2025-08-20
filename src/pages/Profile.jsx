import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

export const Profile = () => {
  const { islogged, username } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      {!islogged ? (
        <div className="login-prompt">
          <div className="login-icon">👤</div>
          <h2>Please Sign In First</h2>
          <p>You need to be signed in to access your profile.</p>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      ) : (
        <>
          <div className="profile-header">
    <img 
        src="https://i.pinimg.com/474x/0f/e9/bb/0fe9bba766201d818d6c5dea51a28957.jpg" // Sample Bitmoji-like image
        alt="User  profile" 
        className="profile-avatar"
    />
    <h1 className="profile-title">Hello, {username}</h1>
    <p className="profile-subtitle">Premium Member</p>
</div>

          <div className="profile-content">
            <div className="profile-card">
              <div className="card-header">
                <div className="card-icon">🛒</div>
                <h3 className="card-title">Order History</h3>
              </div>
              <div className="stat-item">
                <span className="stat-label">Recent Orders</span>
                <span className="stat-value">3</span>
              </div>
              <a href="#" className="view-all">View all orders</a>
            </div>

            <div className="profile-card">
              <div className="card-header">
                <div className="card-icon">❤️</div>
                <h3 className="card-title">Wishlist</h3>
              </div>
              <div className="stat-item">
                <span className="stat-label">Saved Items</span>
                <span className="stat-value">12</span>
              </div>
            </div>

            <div className="profile-card">
              <div className="card-header">
                <div className="card-icon">📦</div>
                <h3 className="card-title">Account Settings</h3>
              </div>
              <p className="stat-label">Manage your account settings and preferences.</p>
              <a href="#" className="view-all">Edit Settings</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
