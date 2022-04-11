import {DataTypes} from 'sequelize';
import {sql} from './config'

const TypeQuestion = sql.define('TypeQuestion',{
  idtypequestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {freezeTableName: true})

/*
TypeQuestion.hasMany(Question, {
  foreignKey: 'typequestion_idtypequestion',
  sourceKey: 'idtypequestion',
  foreignKeyConstraint: true,
  onUpdate: 'CASCADE',
  onDelete: 'NO ACTION'
})
 */

export {
  TypeQuestion
}
