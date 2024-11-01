import Styles from './Select.module.css'

function Select({text,name, options,handleOnChange,value,size}){
    return(
        <div className={Styles.form_control}>
            <label hmtlfor={name}>{text}:</label>
            <select name={name} id={name} size={size} onChange={handleOnChange} >
               
                {options.map((option)=>(
                    <option value={option.sigla} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default Select