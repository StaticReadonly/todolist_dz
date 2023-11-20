import styles from './ModalWrapper.module.scss'

//Modal backgrounds
export const ModalWrapper = (props) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.defaultModal}>
                {props.children}
            </div>
        </div>
    )
}