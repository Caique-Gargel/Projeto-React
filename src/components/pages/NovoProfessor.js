import Styles from './NovoProfessor.module.css'
import ProfessorForm from '../Professor/ProfessorForm'
function NovoProfessor()
{
    return(
        <div className={Styles.novoprofessor_container}>
            <h1>Cadastro de Novo Professor</h1>
            <ProfessorForm/>
        </div>
    )
}
export default NovoProfessor