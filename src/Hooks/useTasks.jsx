import { useState } from "react"

//Tasks statuses
export const sortStatuses = {
    all: 'All',
    unfinished: 'Unfinished',
    finished: 'Finished'
};

//Tasks manager hook
export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [sortStatus, setSortStatus] = useState(sortStatuses.all);

    const switchStatus = (id) => {
        const task = tasks.find(t => t.id === id);
        if (task.status === sortStatuses.finished)
            task.status = sortStatuses.unfinished;
        else
            task.status = sortStatuses.finished;

        setTasks([...tasks]);
    };

    const addTask = (task) => setTasks([...tasks, task]);

    const modifyTask = (id, text) => {
        const task = tasks.find(t => t.id === id);
        task.text = text;
        setTasks([...tasks]);
    };

    const deleteTask = (id) => setTasks([...tasks.filter(t => t.id !== id)]);

    return [tasks, sortStatus, setSortStatus, switchStatus, addTask, modifyTask, deleteTask];
}