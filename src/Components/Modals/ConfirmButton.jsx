import styles from './ModalWrapper.module.scss'

//Modal confirm button
export const ConfirmButton = (props) => {
    return (
        <button className={styles.modalConfirmButton} 
                onClick={props.onClick}
                autoFocus={props.autoFocus}>
            {props.children}
        </button>
    )
}