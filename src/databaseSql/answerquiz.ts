import { DataTypes } from 'sequelize';
import {sql} from './config';
import {Answer} from './answer';

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

  /*
  quiz_idquiz: { // key of Quiz
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
   */
}, {
  freezeTableName: true
})
AnswerQuiz.hasMany(Answer,{
  foreignKey: {
    field: 'answerquiz_idanswerquiz',
    allowNull: false
  },
  sourceKey: 'idanswerquiz',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
Answer.belongsTo(AnswerQuiz, {
  foreignKey: {
    field: 'answerquiz_idanswerquiz',
    allowNull: false
  },
  targetKey: 'idanswerquiz'
})

export {
  AnswerQuiz
}

