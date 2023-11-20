import styles from './SearchSort.module.scss'

import { useState } from 'react'

import { sortStatuses } from '../../Hooks/useTasks'

import { IoIosArrowDown } from "react-icons/io"

import { SearchSortDrop } from './SearchSortDrop'

//Search sorter by status
export const SearchSort = (props) => {
    //Get statuses
    const items = Object.getOwnPropertyNames(sortStatuses)
                        .map(n => ({
                            key: Date.now(), 
                            name: sortStatuses[n]
                        }));

    const [drop, setDrop] = useState(false);
    const [selected, setSelected] = useState(items[0].name);

    //Show/hide drop menu
    const click = () => {
        setDrop(!drop)
    };

    //Drop menu item selected
    const select = (val) => {
        setSelected(val);
        props.setSortStatus(items.find(i => i.name === val).name);
    }

    return (
        <div className={styles.searchSort} onClick={click} >
            <div className={styles.searchSortMain}>
                <div className={styles.searchSortText}>
                    {selected}
                </div>
                <IoIosArrowDown className={[styles.searchSortArrow, drop ? styles.searchSortArrowDrop : ""].join(" ")}/>
            </div>
            {drop && 
                <div className={styles.searchSortDropAligner}>
                    <SearchSortDrop items={items} drop={click} select={select}/>
                </div>
            }
        </div>
    )
}