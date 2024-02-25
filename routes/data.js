const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// Create
router.post('/add', async (req, res) => {
  const { name, phoneNumber, email, hobbies } = req.body;

  const data = new Data({ name, phoneNumber, email, hobbies });
  try {
    await data.save();
    res.status(201).json({ message: 'Data created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating data' });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// Update
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, email, hobbies } = req.body;

  try {
    const updatedData = await Data.findByIdAndUpdate(id, {
      name,
      phoneNumber,
      email,
      hobbies,
    }, { new: true });
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(updatedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating data' });
  }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await Data.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting data' });
  }
});

module.exports = router;