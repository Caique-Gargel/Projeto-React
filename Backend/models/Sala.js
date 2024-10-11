const db =require('./db')
const Sala =db.sequelize.define('Sala',
{
    sala_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sala_disponivel:{
        type:db.Sequelize.BOOLEAN
    },
    sala_obs:{
        type:db.Sequelize.STRING
    },
    sala_nome:{
        type:db.Sequelize.STRING
    },
    sala_num:{
        type:db.Sequelize.INTEGER
    }

},
{
  timestamps: false
})

module.exports = Sala;
