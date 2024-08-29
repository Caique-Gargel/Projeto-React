import styles from './NovoAluno.module.css'
import PessoaForm from '../layout/PessoaForm'
import Endereco from '../layout/Endereco'
import AlunoForm from '../Aluno/AlunoForm'
function NovoAluno()
{
    return(
        <div className={styles.novoaluno_container}>
            <h1 id={styles.titulo}>Cadastro de Novo Aluno</h1>
            <AlunoForm/>

        </div>
    )
   
}
export default NovoAluno