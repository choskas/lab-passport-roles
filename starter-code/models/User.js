const {Schema, model} = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
  email: String,
  user: String,
  role: {
    type: String,
    enum: ['BOSS','TA','DEVELOPER']
  }
},{
  timestamps: true,
  versionKey: false
  
})

userSchema.plugin(PLM, {
  usernameField: 'user'
})

module.exports = model('Boss', userSchema)