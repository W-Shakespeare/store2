import PropTypes from 'prop-types';

export const checkPropTypes = component => {
    component.propTypes = {
        sumOfPrice: PropTypes.number,
        average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        amountItems: PropTypes.number,
        isAdmin: PropTypes.bool,
        onClearAllProcessor: PropTypes.func
    };
};
