import Styles from './NovaSala.module.css'
import SalaForm from '../Sala/SalaForm'
function NovaSala()
{
    return(
        <div className={Styles.novasala_container}>
            <h1>Nova Sala</h1>
            <SalaForm/>
        </div>
    )
}
export default NovaSala