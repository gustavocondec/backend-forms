import {DataTypes} from 'sequelize';
import {sql} from './config'

const Quiz = sql.define('Quiz', {
  idquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_iduser: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {freezeTableName: true})
export {
  Quiz
}
