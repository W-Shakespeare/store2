import React, { useState } from 'react';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import { deleteSelectedProcessor, updateProcessor } from '../redux/processors/processors.thunks';
import { useDispatch } from 'react-redux';

const withEditeItem = Component => {
    const EditeItem = ({ ...props }) => {
        const dispatch = useDispatch();
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedContact, setSelectedContact] = useState();

        const onOpenModal = selectedContact => {
            setIsModalOpen(true);
            setSelectedContact(selectedContact);
        };

        const changeDataProcessor = changedProcessor => {
            dispatch(updateProcessor(changedProcessor.id, changedProcessor));
            setIsModalOpen(false);
        };

        const onDeleteProcessor = id => {
            dispatch(deleteSelectedProcessor(id));
        };

        const onCloseModal = () => {
            setIsModalOpen(false);
        };
        return isModalOpen === true ? (
            <ModalWindow
                selectedCard={selectedContact}
                {...selectedContact}
                changeCardData={changeDataProcessor}
                onCloseModal={onCloseModal}
            />
        ) : (
            <Component {...props} onOpenModal={onOpenModal} onDeleteProcessor={onDeleteProcessor} />
        );
    };
    return EditeItem;
};
export default withEditeItem;
