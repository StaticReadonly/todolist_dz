import styles from './Task.module.scss'

import { useState } from 'react'
import { sortStatuses } from '../../Hooks/useTasks'

import { GoPencil } from "react-icons/go"
import { GoTrash } from "react-icons/go"

import { TaskCheckbox } from '../TaskCheckbox/TaskCheckbox'
import { ChangeTaskModal } from '../Modals/ChangeTaskModal/ChangeTaskModal'
import { DeleteTaskModal } from '../Modals/DeleteTaskModal/DeleteTaskModal'

//Task container
export const Task = (props) => {
    const [checked, setChecked] = useState(props.status === sortStatuses.finished);
    const [changeModal, setChangeModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    //Swap task checkbox
    const switchChecked = () => {
        setChecked(!checked);
        props.switchStatus(props.id);
    }

    //Show/hide task change modal
    const switchChangeModal = () => setChangeModal(!changeModal);
    //Show/hide task delete modal
    const switchDeleteModal = () => setDeleteModal(!deleteModal);

    return (
        <div className={styles.taskContainer}>
            <TaskCheckbox checked={checked} switchChecked={switchChecked}/>
            <div className={[styles.taskText, checked ? styles.taskTextStrike : ""].join(" ")}>
                {props.text}
            </div>
            <div className={styles.taskControlButtons}>
                <GoPencil onClick={switchChangeModal}/>
                <GoTrash onClick={switchDeleteModal}/>
            </div>
            {changeModal && <ChangeTaskModal {...props} switchModal={switchChangeModal}/>}
            {deleteModal && <DeleteTaskModal {...props} switchModal={switchDeleteModal}/>}
        </div>
    )
}