import styles from './Button.module.css'

function Button({text,type}){
    return(
        <div className={styles.form_control}>
            <button className={`${styles[type]}`}>{text}</button>
            
        </div>
    )

}
export default Button