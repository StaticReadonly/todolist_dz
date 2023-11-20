import styles from './ModalWrapper.module.scss'

//Modal buttons container
export const ModalButtons = (props) => {
    return (
        <div className={styles.modalButtons}>
            {props.children}
        </div>
    )
}