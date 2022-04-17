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
  sourceKey: 'idquiz',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
Question.belongsTo(Quiz, {
  foreignKey: {
    name: 'quiz_idquiz',
    allowNull: false,
    field: 'quiz_idquiz'
  },
  targetKey: 'idquiz',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})


// QUIZ 1:N ANSWERQUIZ
Quiz.hasMany(AnswerQuiz, {
  foreignKey: {
    field: 'quiz_idquiz',
    allowNull: false,
    name: 'quiz_idquiz'
  },
  sourceKey: 'idquiz',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
AnswerQuiz.belongsTo(Quiz, {
  foreignKey: {
    field: 'quiz_idquiz',
    allowNull: false,
    name: 'quiz_idquiz'
  },
  targetKey: 'idquiz',
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})

export {
  Quiz
}

