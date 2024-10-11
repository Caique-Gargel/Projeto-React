const db =require('./db')
const Pessoa =db.sequelize.define('Pessoa',
{
    pes_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    

    pes_nome:{
        type:db.Sequelize.STRING
    },
    pes_cpf:{
        type:db.Sequelize.STRING
    },
    pes_telefone:{
        type:db.Sequelize.STRING
    },
    pes_email:{
        type:db.Sequelize.STRING
    },
    pes_dataNasc:{
        type:db.Sequelize.DATEONLY
    },
    end_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Endereco',
            key:'end_cod'
        }, // <<< Note, its table's name, not object name
    }
   

},
{
  timestamps: false
})

module.exports = Pessoa;
