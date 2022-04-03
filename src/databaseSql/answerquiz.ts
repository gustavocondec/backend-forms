import { DataTypes } from 'sequelize';
import {sql} from './config';

const AnswerQuiz = sql.define('AnswerQuiz', {
  idanswerquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },

  quiz_idquiz: { // key of Quiz
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  freezeTableName: true
})


export {
  AnswerQuiz
}

