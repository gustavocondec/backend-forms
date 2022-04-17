import {DataTypes} from 'sequelize';
import {sql} from './config'
import {Answer} from './answer';

const Question = sql.define('Question',{
  idquestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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

  /*

  quiz_idquiz: {
    type: DataTypes.INTEGER,
    //primaryKey: true,
    allowNull: false,
    references: {
      model: Quiz,
      key: 'idquiz'
    },
  },

  typequestion_idtypequestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  }

   */
},{freezeTableName: true})




Question.hasMany(Answer, {
  foreignKey: {
    name: 'question_idquestion',
    field: 'question_idquestion',
    allowNull: false
  },
  sourceKey: 'idquestion',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
Answer.belongsTo(Question, {
  foreignKey: {
    name: 'question_idquestion',
    allowNull: false,
    field: 'question_idquestion'
  },
  targetKey: 'idquestion'
})

export {
  Question
}

