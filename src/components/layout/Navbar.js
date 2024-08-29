import styles from '../layout/Navbar.module.css'
import Container from './Container'
import { Link } from "react-router-dom"
import logo from "../../img/logo1.png"


function Navbar()
{
    return(
        <nav className={styles.navbar}>
            <Container customClass='nav'>
            <Link to='/'>
                <img className={styles.logo} src={logo} alt="logo2"/>
            </Link>
                
            <ul className={styles.list}>

                <li className={styles.item}>
                    <Link  to='/NovoAluno'>  Alunos   </Link>
                    
                </li>
                <li className={styles.item}>
                    <Link  to='/NovoProfessor'> Professores  </Link> 
                   
                </li>
                <li className={styles.item}>
                    <Link  to='/NovaSala'>  Salas  </Link>
                    
                    
                </li>
                <li className={styles.item}>
                    <Link  to='/Alunos'> Cronograma de Aulas</Link>
                </li>
            </ul>
            
            
        
        
            
        
        
            
                    
                

            </Container>

        </nav>
    )
}
export default Navbar