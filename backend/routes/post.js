const router = require('express').Router();
const { post } = require ('../controllers');

router.get('/', post.index)
router.get('/', post.create)

module.exports = router;