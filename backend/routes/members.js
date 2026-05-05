const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const upload = require('../middleware/upload');

// POST - Create a new member
router.post('/', upload.single('profileImage'), async (req, res) => {
  try {
    const {
      name,
      role,
      email,
      contact,
      rollNumber,
      year,
      degree,
      aboutProject,
      hobbies,
      certificate,
      internship,
      aim,
    } = req.body;

    const profileImage = req.file ? `/uploads/${req.file.filename}` : null;

    const member = new Member({
      name,
      role,
      email,
      contact,
      rollNumber,
      year,
      degree,
      aboutProject,
      hobbies,
      certificate,
      internship,
      aim,
      profileImage,
    });

    await member.save();
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Fetch all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json({ success: true, data: members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Fetch one member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ success: false, message: 'Member not found' });
    }
    res.json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE - Delete a member by ID
router.delete('/:id', async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ success: false, message: 'Member not found' });
    }
    res.json({ success: true, message: 'Member deleted successfully', data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
