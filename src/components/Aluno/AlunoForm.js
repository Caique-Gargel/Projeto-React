import Styles from'./AlunoForm.module.css'
import PessoaForm from "../layout/PessoaForm"
import Endereco from "../layout/Endereco"
import Button from '../form/Button'
function AlunoForm()
{
    return(
        <form className={Styles.form}>
            <PessoaForm/>
            <Endereco/>
            <div className={Styles.buttons}>
                <Button text="Cancelar" type="cancel"/>
                
                <Button text="Confirmar" type="submit"/>
            </div>
            
        </form>
    )
}
export default AlunoForm