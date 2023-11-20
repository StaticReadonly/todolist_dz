import styles from '../ModalWrapper.module.scss'

import { useState } from 'react'

import { useInputFocus } from '../../../Hooks/useInputFocus'
import { usePressEnterCallback } from '../../../Hooks/usePressEnterCallback'

import { ModalWrapper } from '../ModalWrapper'
import { ConfirmButton } from '../ConfirmButton'
import { DenyButton } from '../DenyButton'
import { ModalInput } from '../ModalInput'
import { ModalSign } from '../ModalSign'
import { ModalFiller } from '../ModalFiller'
import { ModalButtons } from '../ModalButtons'

//Change task modal
export const ChangeTaskModal = (props) => {
    const [text, setText] = useState(props.text);
    const [focused, inputFocus, inputBlur] = useInputFocus();
    const [warn, setWarn] = useState(false);

    //Text change handler
    const textChange = (e) => {
        setText(e.target.value);
        setWarn(false);
    }

    //Try to change task in list
    const tryChangeTask = () => {
        if (text.trim().length > 0){
            props.modifyTask(props.id, text);
            props.switchModal();
        }  
        else{
            setWarn(true);
        }      
    }

    //Enter keyboard event handler
    const pressEnter = usePressEnterCallback(tryChangeTask);

    return (
        <ModalWrapper>
            <ModalSign>
                Change Note
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
                <ConfirmButton onClick={tryChangeTask}>
                    Apply
                </ConfirmButton>
            </ModalButtons>
        </ModalWrapper>
    )
}