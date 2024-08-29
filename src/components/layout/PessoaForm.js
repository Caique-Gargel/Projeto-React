import Styles from './PessoaForm.module.css'
import Select from '../form/Select'
import Input from '../form/Input'

function PessoaForm(){
    function CPFmask(e){
        let value = e.currentTarget.value;
       
        e.currentTarget.maxLength=14;
        value= value.replace(/\D/g,"")
        if (value.length>3 && value.length<7)
            value= value.replace(/^(\d{3})(\d)/,"$1.$2");
        else
        {
            if(value.length>6 && value.length<10)
                value= value.replace(/^(\d{3})(\d{3})(\d)/,"$1.$2.$3");
            else
                value= value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/,"$1.$2.$3-$4");
        }
        
        e.currentTarget.value=value;
    }
    function PhoneMask(e){
        let value = e.currentTarget.value;
        
        e.currentTarget.maxLength=14;
        value= value.replace(/\D/g,"")
        if (value.length>2)
            value= value.replace(/^(\d{2})(\d)/,"($1)$2");
        if(value.length>8 && value.length<14)
                value= value.replace(/^(\(\d{2}\))(\d{4})(\d)/,"$1$2-$3");
        if (value.length==14)
        {
            value= value.replace(/-/,"");
            value= value.replace(/^(\(\d{2}\))(\d{5})(\d)/,"$1$2-$3");
        }

        e.currentTarget.value=value;
    }
    return(
       
        <div>
            
            <Input name="Nome" type="text" size={113}  placeholder=" insira o nome" text="Nome"/>
            <Input name="Email" type="email" size={113}  placeholder=" insira o Email" text="Email"/>
            
            <Input name="Telefone" handleKeyUp={PhoneMask} type="text" size={35}  placeholder=" insira o Telefone" text="Telefone"/>
            
            <Input name="CPF" handleKeyUp={CPFmask} type="text" size={35}  placeholder="000.000.000-00" text="CPF"/>
            <Input name="DataNasc" type="date"  placeholder=" insira o nome" text="Data de Nascimento"/>
            
            
            
            
            
        </div>
    )
}
export default PessoaForm