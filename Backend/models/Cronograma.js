const db =require('./db')
const Cronograma =db.sequelize.define('Cronograma',
{
    crono_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    crono_horainicio:{
        type:db.Sequelize.INTEGER
    },
    crono_horafim:{
        type:db.Sequelize.INTEGER
    },
    crono_data:{
        type:db.Sequelize.DATEONLY
    },
    sala_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Sala',
            key:'sala_cod'
        }, // <<< Note, its table's name, not object name
    },
    prof_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Professor',
            key:'prof_cod'
        }, // <<< Note, its table's name, not object name
    },
    alu_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Aluno',
            key:'alu_cod'
        }, // <<< Note, its table's name, not object name
    }

},
{
  timestamps: false
})

module.exports = Cronograma;