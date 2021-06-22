import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProcessor } from '../../redux/processors/processors.thunks';
import AddProcessor from './AddProcessor';
import PropTypes from 'prop-types';

const AddProcessorContainer = () => {
    const dispatch = useDispatch();
    const { isAdmin } = useSelector(state => state.authorization);

    const [formValue, setFormValue] = useState({
        id: '',
        classs: '',
        description: '',
        price2: ''
    });

    const onInputChange = e => {
        const { name, value } = e.target;
        setFormValue(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const willAddProcessor = e => {
        e.preventDefault();
        dispatch(createProcessor({ ...formValue, id: Date.now() }));
        setFormValue({
            id: '',
            classs: '',
            description: '',
            price2: ''
        });
    };
    return (
        <AddProcessor
            nameValue={formValue.classs}
            descriptionValue={formValue.description}
            priceValue={formValue.price2}
            onInputChange={onInputChange}
            willAddProcessor={willAddProcessor}
            isAdmin={isAdmin}
        />
    );
};

export default AddProcessorContainer;
