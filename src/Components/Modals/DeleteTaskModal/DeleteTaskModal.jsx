import { ModalWrapper } from '../ModalWrapper'
import { ConfirmButton } from '../ConfirmButton'
import { DenyButton } from '../DenyButton'
import { ModalSign } from '../ModalSign'
import { ModalFiller } from '../ModalFiller'
import { ModalButtons } from '../ModalButtons'

//Delete task modal
export const DeleteTaskModal = (props) => {
    //Delete task handler
    const deleteTask = () => props.deleteTask(props.id);

    return (
        <ModalWrapper>
            <ModalSign>
                Delete Note?
            </ModalSign>
            <ModalFiller/>
            <ModalButtons>
                <DenyButton onClick={props.switchModal}>
                    Cancel
                </DenyButton>
                <ModalFiller/>
                <ConfirmButton onClick={deleteTask} autoFocus={true}>
                    Confirm
                </ConfirmButton>
            </ModalButtons>
        </ModalWrapper>
    )
}