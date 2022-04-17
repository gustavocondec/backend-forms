import { Sequelize } from 'sequelize';

export const sql = new Sequelize('forms', 'gustavo', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    freezeTableName: true
  }
})


