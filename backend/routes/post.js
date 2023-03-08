const router = require('express').Router();
const { post } = require ('../controllers');

router.get('/', post.index)
router.post('/post', post.create)

module.exports = router;