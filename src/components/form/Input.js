import Styles from './Input.module.css'

function Input({type,text,name,placeholder,handleOnChange,value,size,handleKeyUp}){
 
    return(
        
        <div className={Styles.form_control}>
            <label hmtlfor={name}>{text}:</label>
            <input
            type={type} 
            name={name} 
            id={name}
            size={size}
            placeholder={placeholder} 
            onChange={handleOnChange}
            onKeyDown={handleKeyUp}
            
            onKeyUp={handleKeyUp}
            value={value}/>
        </div>
    )
}
export default Input