const db =require('./db')
const Professor =db.sequelize.define('Professor',
{
    prof_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    pes_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Pessoas',
            key:'pes_cod'
        }, // <<< Note, its table's name, not object name
    },
    prof_especializacao:{
        type:db.Sequelize.STRING
    }

},
{
  timestamps: false
})

module.exports = Professor;
