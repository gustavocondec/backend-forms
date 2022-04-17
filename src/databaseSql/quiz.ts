import {DataTypes} from 'sequelize';
import {sql} from './config'
import {Question} from './question';
import {AnswerQuiz} from './answerquiz';

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


// QUIZ 1:N QUESTION
Quiz.hasMany(Question, {
  foreignKey: {
    allowNull: false,
    name: 'quiz_idquiz',
    field: 'quiz_idquiz'
  },
  sourceKey: 'idquiz'
})
Question.belongsTo(Quiz, {
  foreignKey: {
    name: 'quiz_idquiz',
    allowNull: false,
    field: 'quiz_idquiz'
  },
  targetKey: 'idquiz'
})


// QUIZ 1:N ANSWERQUIZ
Quiz.hasMany(AnswerQuiz, {
  foreignKey: {
    field: 'quiz_idquiz',
    allowNull: false,
  },
  sourceKey: 'idquiz'
})
AnswerQuiz.belongsTo(Quiz, {
  foreignKey: {
    field: 'quiz_idquiz',
    allowNull: false
  },
  targetKey: 'idquiz'
})

export {
  Quiz
}

