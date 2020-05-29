import Sequelize from 'sequelize'
import sequelize from '../../sequelize'

class User extends Sequelize.Model {

}

User.init({

  username: {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'user',
  timestamps: true
})

export default User