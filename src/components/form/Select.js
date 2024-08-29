import Styles from './Select.module.css'

function Select({text,name, options,handleOnChange,value,size}){
    return(
        <div className={Styles.form_control}>
            <label hmtlfor={name}>{text}:</label>
            <select name={name} id={name} size={size} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default Select