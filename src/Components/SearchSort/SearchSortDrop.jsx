import React from 'react'
import styles from './SearchSort.module.scss'

import { SearchSortDropItem } from './SearchSortDropItem'

//Tasks sort drop menu
export const SearchSortDrop = (props) => {
    return (
        <div className={styles.searchSortDrop} 
            onClick={props.drop}>
            {props.items.map(i => 
                <React.Fragment key={i.name}>
                    <SearchSortDropItem {...i} select={props.select}/>
                </React.Fragment>
            )}
        </div>
    )
}