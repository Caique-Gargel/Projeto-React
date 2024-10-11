const db =require('./db')
const Endereco =db.sequelize.define('Endereco',
{
    end_cod:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    end_cep:{
        type:db.Sequelize.STRING
    },
    end_bairro:{
        type:db.Sequelize.STRING
    },
    end_rua:{
        type:db.Sequelize.STRING
    },
    end_num:{
        type:db.Sequelize.INTEGER
    },
    cid_cod:{
        type: db.Sequelize.INTEGER,
        autoIncrement: false,
        references: {
            model:'Cidade',
            key:'cid_cod'
        }, // <<< Note, its table's name, not object name
    }

},
{
  timestamps: false
})

module.exports = Endereco;
