const router = require('express').Router()
const User = require('../models/User')
const passport = require('../config/passport')

router.get('/signup', (req, res, next) => {
  const config = {
    title: 'Sign Up',
    action: '/signup',
    button: 'Sign up',
    register: true // esto lo pongo para decirle al form que es registro y muestre el name y el lastname
  };
  res.render('auth/form', config);
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body }, req.body.password);
    console.log(user);
    res.redirect('/login');
  } catch (e) {
    console.log(e);
    res.send('El usuario ya existe');
  }
})

router.get('/login', (req, res, next) => {
  const config = {
    title: 'Log in',
    action: '/login',
    button: 'Login'
  };
  res.render('auth/form', config);
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log(req.user, req.session);
  res.redirect('/profile');
});