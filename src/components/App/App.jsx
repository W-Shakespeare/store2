import React, { useState, useEffect } from 'react';
import { SideBar } from '../../utils/material/sidebar/sidebar';
import Content from '../Content/Content';
import StyledApp from './StyledApp';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getProcessorList } from '../../redux/processors/processors.thunks';

const App = () => {
    const dispatch = useDispatch();
    const { processorsList } = useSelector(state => state.processorsList);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        window.addEventListener(
            `resize`,
            event => {
                document.body.clientWidth >= 800 ? setIsMobile(false) : setIsMobile(true);
            },
            false
        );
    }, []);

    useEffect(() => {
        dispatch(getProcessorList());
    }, []);

    return (
        <StyledApp>
            <SideBar isMobile={isMobile} />
            {!processorsList && <LoadingSpinner />}
            {processorsList && <Content />}
        </StyledApp>
    );
};
export default App;
