import { DataTypes } from 'sequelize';
import {sql} from './config';

const Answer = sql.define('Answer', {
  idanswer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
/*
  answerquiz_idanswerquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'AnswerQuiz',
      key: 'idanswerquiz'
    }
  },

  question_idquestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  question_quiz_idquiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }
   */
},{
  freezeTableName: true
})

export {
  Answer
}
