import React from 'react';
// import ReactComponent from './e.svg';
import oops from '../../assets/images/oops.jpg';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="errorBoundary">
                    <ReactComponent className="logoError" />
                    <h1>Something went wrong.</h1>
                    <img src={oops}></img>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
