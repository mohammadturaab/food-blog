const router = require('express').Router();
const { blog } = require ('../controllers');

router.get('/', blog.getBlog)
router.get('/', blog.postBlog)

module.exports = router;