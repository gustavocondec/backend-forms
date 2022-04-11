import {DataTypes} from 'sequelize';
import {sql} from './config'
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

Quiz.hasMany(Question, {
  foreignKey: {
    allowNull: false,
    name: 'quiz_idquiz'
  },
  sourceKey: 'idquiz',
  foreignKeyConstraint: true
})
Question.belongsTo(Quiz, {
  foreignKey: 'quiz_idquiz',
  targetKey: 'idquiz'
})

/*
Quiz.hasMany(AnswerQuiz, {
  foreignKey: 'quiz_idquiz',
  sourceKey: 'idquiz',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
 */

export {
  Quiz
}

