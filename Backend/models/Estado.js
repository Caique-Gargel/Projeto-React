const db =require('./db')
const Estado =db.sequelize.define('Estado',
{
    est_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    est_sigla:{
        type:db.Sequelize.STRING
    },
    est_nome:{
        type:db.Sequelize.STRING
    }

},
{
  timestamps: false
})

module.exports = Estado;
