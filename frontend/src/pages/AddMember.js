import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddMember.css';

const API_URL = 'http://localhost:5000/api/members';

function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    contact: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = new FormData();
      
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      if (profileImage) {
        data.append('profileImage', profileImage);
      }

      const response = await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert('Member added successfully!');
        navigate('/members');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding member');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-member-container">
      <div className="form-wrapper">
        <h1>Add New Member</h1>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="member-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter member name"
              />
            </div>
            <div className="form-group">
              <label>Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                placeholder="e.g., Developer, Designer"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="member@email.com"
              />
            </div>
            <div className="form-group">
              <label>Contact *</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Roll Number *</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter roll number"
              />
            </div>
            <div className="form-group">
              <label>Year *</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Degree *</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                required
                placeholder="e.g., B.Tech CSE"
              />
            </div>
            <div className="form-group">
              <label>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {preview && (
                <div className="image-preview">
                  <img src={preview} alt="Preview" />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>About Project</label>
            <textarea
              name="aboutProject"
              value={formData.aboutProject}
              onChange={handleInputChange}
              placeholder="Describe your contribution to the project"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Hobbies</label>
            <textarea
              name="hobbies"
              value={formData.hobbies}
              onChange={handleInputChange}
              placeholder="List your hobbies"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Certificate</label>
            <textarea
              name="certificate"
              value={formData.certificate}
              onChange={handleInputChange}
              placeholder="List your certificates"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Internship</label>
            <textarea
              name="internship"
              value={formData.internship}
              onChange={handleInputChange}
              placeholder="Describe your internship experience"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Aim</label>
            <textarea
              name="aim"
              value={formData.aim}
              onChange={handleInputChange}
              placeholder="Describe your career aim"
              rows="3"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Member'}
            </button>
            <button 
              type="button" 
              className="btn btn-cancel"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMember;
