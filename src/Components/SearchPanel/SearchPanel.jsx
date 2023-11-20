import styles from './SearchPanel.module.scss'

import { SearchBar } from '../SearchBar/SearchBar'
import { SearchSort } from '../SearchSort/SearchSort'

//Tasks search panel
export const SearchPanel = (props) => {
    return (
        <div className={styles.searchPanel}>
            <SearchBar input={props.input} setInput={props.setInput}/>
            <SearchSort setSortStatus={props.setSortStatus}/>
        </div>
    )
}