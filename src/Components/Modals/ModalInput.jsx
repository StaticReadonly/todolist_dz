import styles from './ModalWrapper.module.scss'

//Modal input
export const ModalInput = (props) => {
    return (
        <input className={[styles.modalInput, props.focused ? styles.searchBarFocus : ""].join(' ')}
                placeholder={'Input your note...'}
                type={'text'}
                value={props.value}
                maxLength={100}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                autoFocus={true}
                name={'note'}/>
    )
}