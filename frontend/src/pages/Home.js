import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Student Team Members</h1>
        <p className="team-name">Team Management Application</p>
        <p className="welcome-message">Welcome! Manage your team members efficiently.</p>
        
        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/add')}
          >
            Add Member
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/members')}
          >
            View Members
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
