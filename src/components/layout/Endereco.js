import Styles from './Endereco.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
function Endereco(){
    var optionsEstado = [{name: "São Paulo", id: 1  },{name:"Rio",id:2}];
    var optionsCidade = [{name: "Paraguaçu", id: 1  },{name:"Rio de Janeiro",id:2}];
    
    function CEPmask(e){
        let value = e.currentTarget.value;
        console.log(value);
        e.currentTarget.maxLength=9;
        value= value.replace(/\D/g,"")
        if (value.length>5)
            value= value.replace(/^(\d{5})(\d)/,"$1-$2");
       
        e.currentTarget.value=value;
    }
        
    
    
    return(
        <fieldset className={Styles.fieldset}>
             <legend>Endereço</legend>
            <Input name='CEP' handleKeyUp={CEPmask} size={31} text='CEP' type='text' placeholder='00000-000'  />
            <Select name="Estado" options={optionsEstado}  text="Estado"/>
            <Select name="Cidade" options={optionsCidade}  text="Cidade"/>
            
            
            <Input name='Bairro' size={37} text='Bairro' type='text'   />
            <Input name='Rua' size={37} text='Rua' type='text' />
            <Input name='Numero' size={20} text='Numero' type='text' placeholder='ex:123'  />
        </fieldset>
    )
}
export default Endereco