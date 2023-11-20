import styles from './AddButton.module.scss'

import { FaPlus } from "react-icons/fa6";

//Task adding button
export const AddButton = (props) => {
    return (
        <div className={styles.addButton} onClick={props.switchModal}>
            <FaPlus/>
        </div>
    )
}