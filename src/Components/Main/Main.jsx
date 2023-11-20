import styles from './Main.module.scss'

import { useDeferredValue, useState } from 'react'

import { useTasks } from '../../Hooks/useTasks'

import { SearchPanel } from '../SearchPanel/SearchPanel'
import { TasksList } from '../TasksList/TasksList'
import { AddTaskModal } from '../Modals/AddTaskModal/AddTaskModal'

//Application main component
export const Main = (props) => {
    const [
        tasks, 
        sortStatus, 
        setSortStatus,
        switchStatus, 
        addTask, 
        modifyTask, 
        deleteTask
    ] = useTasks();

    const [input, setInput] = useState('');
    const inputDef = useDeferredValue(input);
    
    const [addTaskModalOpened, setAddTaskModalOpened] = useState(false);

    //Show/hide add task modal
    const switchModal = () => setAddTaskModalOpened(!addTaskModalOpened);
    
    return (
        <main>
            <SearchPanel input={input} 
                    setInput={setInput}
                    setSortStatus={setSortStatus}/>
            <TasksList tasks={tasks} 
                    switchModal={switchModal} 
                    switchStatus={switchStatus} 
                    input={inputDef}
                    sortStatus={sortStatus}
                    modifyTask={modifyTask}
                    deleteTask={deleteTask}/>
            {addTaskModalOpened && <AddTaskModal switchModal={switchModal} addTask={addTask}/>}
        </main>
    )
}