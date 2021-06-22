import PropTypes from 'prop-types';

export const checkPropTypes = component => {
    component.propTypes = {
        nameValue: PropTypes.string,
        descriptionValue: PropTypes.string,
        priceValue: PropTypes.string,
        isAdmin: PropTypes.bool,
        onInputChange: PropTypes.func,
        willAddProcessor: PropTypes.func
    };
};
