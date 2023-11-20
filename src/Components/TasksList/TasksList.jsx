import styles from './TasksList.module.scss'

import { Fragment } from 'react'

import { sortStatuses } from '../../Hooks/useTasks'

import { AddButton } from '../AddButton/AddButton'
import { Task } from '../Task/Task'
import { TasksListDivider } from './TasksListDivider'

//List of tasks
export const TasksList = (props) => {
    //Tasks whitespace check filter
    const containsInput = (t) => {
        return t.text.includes(props.input);
    }

    //Tasks status filter
    const filterStatus = (t) => {
        return props.sortStatus === sortStatuses.all || t.status === props.sortStatus;
    }

    //Result array after filtering tasks
    const displayTasks = (props.tasks.length === 0) ?
            (props.tasks)
            :
            (props.tasks.filter(filterStatus)
                    .filter(containsInput)
                    .sort(t => t.id));

    return (
        <div className={styles.tasksContainer}>
            {displayTasks.length == 0 ?
            (
                <>
                    <div className={styles.tasksEmptyImage}></div>
                    <div className={styles.tasksEmptyText}>
                        Empty...
                    </div>
                </>
            )
            :
            (displayTasks.map(t => 
                <Fragment key={t.id}>
                    <Task {...t} {...props}/>
                    <TasksListDivider/>
                </Fragment>
            ))}
            <AddButton switchModal={props.switchModal}/>
        </div>
    )
}