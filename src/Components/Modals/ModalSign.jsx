import styles from './ModalWrapper.module.scss'

//Modal main sign
export const ModalSign = (props) => {
    return (
        <div className={styles.modalSign}>
            {props.children}
        </div>
    )
}