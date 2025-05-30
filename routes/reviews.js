import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import {client} from "../database/client.js"
let db = client.db('reviewsdb'); // db en client moeten ook geimporteerd worden 
import { ObjectId } from 'mongodb';




const app = express();


// GET reviews
router.get('/', async (req, res) =>{
    const reviews = 
    await db.collection('reviews').find().toArray();
    res.json(reviews);
});

// POST review
router.post('/', async (req, res) => {
    const reviews = req.body;

    
    const result = await db.collection('reviews').insertOne(reviews);
    res.status(201).json(result);
});


// GET review with id

router.get('/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const review = await db.collection('reviews').findOne({ _id: id });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

// DELETE a review
router.delete('/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await db.collection('reviews').deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

//PATCH review

router.patch('/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const update = { $set: req.body };
    const result = await db.collection('reviews').updateOne({ _id: id }, update);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json({ message: 'Review updated' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});




export default router
