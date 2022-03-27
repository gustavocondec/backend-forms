import { DataTypes } from 'sequelize';
import {sql} from './config';

const AnswerQuiz = sql.define('AnswerQuiz', {
  idanswerquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  quiz_idquiz: { // key of quiz
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
})
export {
  AnswerQuiz
}
