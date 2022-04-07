import {DataTypes} from 'sequelize';
import {sql} from './config'

const Question = sql.define('Question',{
  idquestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  options: {
    type: DataTypes.STRING
  },
  quiz_idquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  typequestion_idtypequestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
},{freezeTableName: true})

export {
  Question
}
