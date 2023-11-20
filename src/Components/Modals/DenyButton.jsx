import styles from './ModalWrapper.module.scss'

//Modal deny button
export const DenyButton = (props) => {
    return (
        <button className={styles.modalCancelButton} 
                onClick={props.onClick}
                autoFocus={props.autoFocus}>
            {props.children}
        </button>
    )
}