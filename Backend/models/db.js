const Sequelize=require("sequelize");
const sequelize =new Sequelize('agendaaulabd','root','BD2024',{
  host:"localhost",
  dialect:"mysql"
});
sequelize.authenticate().then(function()
{
  console.log("deu bom");
}).catch(function(erro){
  console.log("deu ruim"+erro)
})

module.exports = {
  Sequelize:Sequelize,
  sequelize:sequelize
}
