import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ViewMembers.css';

const API_URL = 'http://localhost:5000/api/members';

function ViewMembers() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setMembers(response.data.data);
      }
    } catch (err) {
      setError('Error fetching members');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/members/${id}`);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        console.log('Deleting member with ID:', id);
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log('Delete response:', response);
        if (response.data.success) {
          alert('Member deleted successfully!');
          fetchMembers();
        } else {
          alert('Failed to delete member');
        }
      } catch (err) {
        console.error('Delete error:', err.response?.data || err.message);
        alert('Error deleting member: ' + (err.response?.data?.message || err.message));
      }
    }
  };

  return (
    <div className="view-members-container">
      <div className="members-header">
        <h1>Team Members</h1>
        <button 
          className="btn btn-add-member"
          onClick={() => navigate('/add')}
        >
          Add New Member
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      {loading ? (
        <div className="loading">Loading members...</div>
      ) : members.length === 0 ? (
        <div className="no-members">
          <p>No members found. <button onClick={() => navigate('/add')}>Add one now!</button></p>
        </div>
      ) : (
        <div className="members-grid">
          {members.map((member) => (
            <div key={member._id} className="member-card">
              <div className="member-image-wrapper">
                {member.profileImage ? (
                  <img
                    src={`http://localhost:5000${member.profileImage}`}
                    alt={member.name}
                    className="member-image"
                  />
                ) : (
                  <div className="placeholder-image">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-email">{member.email}</p>
                <p className="member-roll">{member.rollNumber}</p>
                
                <div className="member-actions">
                  <button
                    className="btn btn-view-details"
                    onClick={() => handleViewDetails(member._id)}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(member._id, member.name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button 
        className="btn btn-home"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewMembers;
