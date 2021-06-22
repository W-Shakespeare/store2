import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProcessorListInformation from './ProcessorListInformation';
import { clearAllProcessors } from '../../redux/processors/processors.thunks';

const ProcessorListInformationContainer = () => {
    const { processorsList } = useSelector(state => state.processorsList);
    const [isShowConfirm, setIsShowConfirm] = useState(false);
    const dispatch = useDispatch();
    const { isAdmin } = useSelector(state => state.authorization);
    const [sumOfPrice, setSumOfPrice] = useState(null);
    const [average, setAverage] = useState(null);
    const [amountItems, setAmountItems] = useState(processorsList.length);

    useEffect(() => {
        setAmountItems(processorsList.length);
        getCalculatedProcessorInformation();
    }, [processorsList]);

    const getCalculatedProcessorInformation = () => {
        calculateAverage(calculateSumOfPrice());
    };
    const calculateSumOfPrice = () => {
        let result = processorsList.reduce((acc, next) => {
            return acc + +next.price2;
        }, 0);
        setSumOfPrice(result);
        return result;
    };
    const calculateAverage = sumOfPrice => {
        sumOfPrice == 0
            ? setAverage('0')
            : setAverage((sumOfPrice / processorsList.length).toFixed(2));
    };

    const onClearAllProcessor = () => {
        dispatch(clearAllProcessors());
    };

    return (
        <ProcessorListInformation
            sumOfPrice={sumOfPrice}
            average={average}
            amountItems={amountItems}
            isAdmin={isAdmin}
            onClearAllProcessor={onClearAllProcessor}
            isShowConfirm={isShowConfirm}
            setIsShowConfirm={setIsShowConfirm}
        />
    );
};

export default ProcessorListInformationContainer;
