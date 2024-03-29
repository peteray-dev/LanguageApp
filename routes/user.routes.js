const {
  register,
  login,
  allUser,
  currentUser,
  authorization,
  roles,
  loggedInUser,
} = require('../controller/auth.controller');

const router = require('express').Router();

router.get('/', allUser);

router.post('/register', register);

router.post('/login', login);

router.get('/currentuser', authorization, roles('admin'), currentUser);
router.get('/profile', authorization, loggedInUser);

module.exports = router;
