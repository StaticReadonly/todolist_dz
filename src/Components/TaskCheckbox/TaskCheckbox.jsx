import styles from './TaskCheckbox.module.scss'

import { FaCheck } from "react-icons/fa6"

//Task checkbox
export const TaskCheckbox = (props) => {
    return (
        <div className={[styles.taskCheckbox, props.checked ? styles.taskCheckboxChecked : ""].join(" ")} 
            onClick={props.switchChecked}>
            {props.checked && <FaCheck/>}
        </div>
    )
}