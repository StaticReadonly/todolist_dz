import styles from '../ModalWrapper.module.scss'

import { useState } from 'react'

import { useInputFocus } from '../../../Hooks/useInputFocus'
import { sortStatuses } from '../../../Hooks/useTasks'
import { usePressEnterCallback } from '../../../Hooks/usePressEnterCallback'

import { ModalWrapper } from '../ModalWrapper'
import { ConfirmButton } from '../ConfirmButton'
import { DenyButton } from '../DenyButton'
import { ModalInput } from '../ModalInput'
import { ModalSign } from '../ModalSign'
import { ModalFiller } from '../ModalFiller'
import { ModalButtons } from '../ModalButtons'

//Task add modal
export const AddTaskModal = (props) => {
    const [text, setText] = useState('');
    const [focused, inputFocus, inputBlur] = useInputFocus();
    const [warn, setWarn] = useState(false);
    
    //Text change handler
    const textChange = (e) => {
        const t = e.target.value;
        setWarn(false);
        setText(t);
    };
    //Try add task in list
    const tryAddTask = () => {
        if (text.trim().length > 0){
            props.addTask({id: Date.now(), text: text, status: sortStatuses.unfinished});
            props.switchModal();
        }  
        else{
            setWarn(true);
        }      
    };

    //Keyboard enter press handler
    const pressEnter = usePressEnterCallback(tryAddTask);

    return (
        <ModalWrapper>
            <ModalSign>
                New note
            </ModalSign>
            <ModalInput onChange={textChange}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                    focused={focused}
                    value={text}
                    onKeyDown={pressEnter}/>
            {warn && <div className={styles.modalWarning}>Text can't be empty</div>}
            <ModalFiller/>
            <ModalButtons>
                <DenyButton onClick={props.switchModal}>
                    Cancel
                </DenyButton>
                <ModalFiller/>
                <ConfirmButton onClick={tryAddTask}>
                    Apply
                </ConfirmButton>
            </ModalButtons>
        </ModalWrapper>
    )
}