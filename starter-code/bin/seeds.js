const mongoose = require('mongoose')
const User = require('../models/User')

const user = new User({
  email: 'boss@boss',
  user: 'Boss',
  role: 'BOSS'

})

mongoose.connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true
  })
  .then(async () => {
    const users = await User.create(movies)
    console.log(`${users.length} users created`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log(err)
  })