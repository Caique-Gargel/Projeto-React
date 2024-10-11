const db =require('./db')
const Cidade =db.sequelize.define('Cidade',
{
    cid_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cid_nome:{
        type:db.Sequelize.STRING
    },
    
    est_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Estado',
            key:'est_cod'
        }, // <<< Note, its table's name, not object name
    }
},
{
  timestamps: false
})

module.exports = Cidade;
