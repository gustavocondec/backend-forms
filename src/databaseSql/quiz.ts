import {DataTypes} from 'sequelize';
import {sql} from './config'
import {AnswerQuiz} from './answerquiz'
import {Question} from './question';
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
console.log('se llama hasMany')

Quiz.hasMany(AnswerQuiz, {
  foreignKey: 'quiz_idquiz',
  sourceKey: 'idquiz',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})

Quiz.hasMany(Question, {
  foreignKey: 'quiz_idquiz',
  sourceKey: 'idquiz',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})

export {
  Quiz
}

