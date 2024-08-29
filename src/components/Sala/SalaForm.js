import Styles from './SalaForm.module.css'
import Input from '../form/Input'
function SalaForm()
{
    return(
        <div>
            <Input name="numero" size="sm" text="numero" placeholder="ex:1"/>
            <Input  name="situacao" size="sm" text="Situação" placeholder="ex:oocupado"/>
            <Input name="observacao" size="sm" text="observação" />
        </div>
    )
}
export default SalaForm