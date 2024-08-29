import PessoaForm from "../layout/PessoaForm"
import Input from "../form/Input"
import Endereco from "../layout/Endereco"
import Button from "../form/Button"
import styles from './Professor.module.css'
function ProfessorForm()
{
    return(
        <form>
            <PessoaForm/>
            <Input name="Especialização" text="Especialização" size={51}  placeholder="ex:Portugues" />
            <Endereco/>
            <div className={styles.buttons}>
                <Button text="Cancelar" type="cancel"/>
                <Button text="Confirmar" type="submit"/>
                
            </div>
            
        </form>
    )
}
export default ProfessorForm