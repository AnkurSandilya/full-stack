import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/MemberDetails.css';

const API_URL = 'http://localhost:5000/api/members';

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMemberDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/${id}`);
      if (response.data.success) {
        setMember(response.data.data);
      }
    } catch (err) {
      setError('Error fetching member details');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMemberDetails();
  }, [fetchMemberDetails]);

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${member.name}?`)) {
      try {
        console.log('Deleting member with ID:', id);
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log('Delete response:', response);
        if (response.data.success) {
          alert('Member deleted successfully!');
          navigate('/members');
        } else {
          alert('Failed to delete member');
        }
      } catch (err) {
        console.error('Delete error:', err.response?.data || err.message);
        alert('Error deleting member: ' + (err.response?.data?.message || err.message));
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading member details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate('/members')}>Back to Members</button>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="error-container">
        <p>Member not found</p>
        <button onClick={() => navigate('/members')}>Back to Members</button>
      </div>
    );
  }

  return (
    <div className="member-details-container">
      <button 
        className="btn btn-back"
        onClick={() => navigate('/members')}
      >
        ← Back to Members
      </button>

      <div className="details-card">
        <div className="details-image-wrapper">
          {member.profileImage ? (
            <img
              src={`http://localhost:5000${member.profileImage}`}
              alt={member.name}
              className="details-image"
            />
          ) : (
            <div className="placeholder-image-large">
              <span>No Image</span>
            </div>
          )}
        </div>

        <div className="details-content">
          <h1>{member.name}</h1>
          
          <div className="details-section">
            <h2>Basic Information</h2>
            <div className="details-row">
              <span className="label">Role:</span>
              <span className="value">{member.role}</span>
            </div>
            <div className="details-row">
              <span className="label">Email:</span>
              <span className="value">{member.email}</span>
            </div>
            <div className="details-row">
              <span className="label">Contact:</span>
              <span className="value">{member.contact}</span>
            </div>
            <div className="details-row">
              <span className="label">Roll Number:</span>
              <span className="value">{member.rollNumber}</span>
            </div>
          </div>

          <div className="details-section">
            <h2>Academic Information</h2>
            <div className="details-row">
              <span className="label">Year:</span>
              <span className="value">{member.year}</span>
            </div>
            <div className="details-row">
              <span className="label">Degree:</span>
              <span className="value">{member.degree}</span>
            </div>
          </div>

          {member.aboutProject && (
            <div className="details-section">
              <h2>About Project</h2>
              <p>{member.aboutProject}</p>
            </div>
          )}

          {member.hobbies && (
            <div className="details-section">
              <h2>Hobbies</h2>
              <p>{member.hobbies}</p>
            </div>
          )}

          {member.certificate && (
            <div className="details-section">
              <h2>Certificates</h2>
              <p>{member.certificate}</p>
            </div>
          )}

          {member.internship && (
            <div className="details-section">
              <h2>Internship Experience</h2>
              <p>{member.internship}</p>
            </div>
          )}

          {member.aim && (
            <div className="details-section">
              <h2>Career Aim</h2>
              <p>{member.aim}</p>
            </div>
          )}
        </div>
      </div>

      <div className="details-footer">
        <button 
          className="btn btn-home"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
        <button 
          className="btn btn-delete"
          onClick={handleDelete}
        >
          Delete Member
        </button>
      </div>
    </div>
  );
}

export default MemberDetails;
