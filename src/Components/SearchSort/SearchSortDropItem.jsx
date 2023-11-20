import styles from './SearchSort.module.scss'

//Tasks sort drop menu item
export const SearchSortDropItem = (props) => {
    return (
        <div onClick={() => props.select(props.name)} className={styles.sortDropItem}>
            {props.name}
        </div>
    )
}