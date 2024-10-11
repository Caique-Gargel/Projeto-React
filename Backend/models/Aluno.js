const db =require('./db')
const Aluno =db.sequelize.define('Aluno',
{
    alu_cod:{
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
    }
},
{
  timestamps: false
})

module.exports = Aluno;
