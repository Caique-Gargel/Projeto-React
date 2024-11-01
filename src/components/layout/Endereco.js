import Styles from './Endereco.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import { useEffect ,useState} from 'react';
function Endereco(){
    const [estado,setEstado]=useState([])
    const [cidade,setCidade]=useState([])
    const [uf,setUf] =useState("RO")
    const [endereco,setEndereco] =useState([])
    const [cep,setCep] =useState([])
    useEffect(()=>{
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json()).then((data) =>{
            console.log(data);
            setEstado(data)
            
        }).catch((err)=>console.log(err))
    },[])
    

    useEffect(()=>{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json()).then((data) =>{
            
            
            console.log(data);
            setCidade(data)
            
        }).catch((err)=>console.log(err))
    },[uf])
    useEffect(()=>{
        fetch(`https://viacep.com.br/ws/${cep}/json/`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json()).then((data) =>{
            
            
            console.log(data);
            setEndereco(data)
            
        }).catch((err)=>console.log(err))
    },[cep])

    function handleCategory(e){
        const aux =e.target.value;
        console.log(aux);
        
        setUf(aux)
        
    }
    function handleCep(e){
        var aux =e.target.value;
        console.log(aux);
        aux=aux.replace("-","")
        setCep(aux)
        console.log(endereco.logradouro);
        
    }
     
    
    
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
            <Input name='CEP' handleKeyUp={CEPmask} size={31} handleblur={handleCep} text='CEP' type='text' placeholder='00000-000'  />
            <Select name="Estado" options={estado} handleOnChange={handleCategory} text="Estado"/>
            <Select name="Cidade" options={cidade}  text="Cidade"/>
            
            
            <Input name='Bairro' size={37} text='Bairro' value={endereco.bairro} type='text'   />
            <Input name='Rua' size={37} text='Rua' value={endereco.logradouro} type='text' />
            <Input name='Numero' size={20} text='Numero'  type='text' placeholder='ex:123'  />
        </fieldset>
    )
}
export default Endereco