import { useRef, useState } from 'react'
import styles from './SearchBar.module.scss'

import { CiSearch } from "react-icons/ci"
import { useInputFocus } from '../../Hooks/useInputFocus'

//Tasks search bar
export const SearchBar = (props) => {
    const [focused, inputFocus, inputBlur] = useInputFocus();
    const input = useRef(null);
    const container = useRef(null);

    //Search bar focus
    const searchBarClick = () => {
        input.current.focus();
    };
    
    //Search bar text changed
    const textChange = (e) => {
        props.setInput(e.target.value.trim());
    };

    return (
        <div className={[styles.searchBar, focused ? styles.searchBarFocus : ""].join(' ')} 
            onClick={searchBarClick} 
            ref={container}>
            <input type={'text'}
                value={props.input} 
                onChange={textChange}
                onFocus={inputFocus}
                onBlur={inputBlur}
                placeholder="Search note..."
                ref={input}
                name={'query'}/>
            <CiSearch height={'100%'}/>
        </div>
    )
}