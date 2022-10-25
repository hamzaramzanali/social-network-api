const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
  removeThoughtReaction,
  addThoughtReaction,
} = require('../../controllers/ThoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/responses
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/Thoughts/:ThoughtId/responses/:responseId
router.route('/:thoughtId/responses/:reactionID').delete(removeThoughtReaction);

module.exports = router;