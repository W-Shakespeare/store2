import React from 'react';
import { Route } from 'react-router-dom';
import withSuspense from './hoc/withSuspense';

const AddProcessorPage = React.lazy(() => import('./pages/AddProcessorPage/AddProcessorPage'));
const ProcessorsPage = React.lazy(() => import('./pages/ProcessorsPage/ProcessorsPage'));

const Routes = () => {
    return (
        <>
            <Route exact path="/" render={withSuspense(ProcessorsPage)} />
            <Route exact path="/AddItem" render={withSuspense(AddProcessorPage)} />
        </>
    );
};

export default Routes;
