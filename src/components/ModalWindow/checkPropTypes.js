import PropTypes from 'prop-types';

export const checkPropTypes = component => {
    component.propTypes = {
        selectedCard: PropTypes.object,
        changeCardData: PropTypes.func,
        onCloseModal: PropTypes.func,
        classs: PropTypes.string,
        description: PropTypes.string,
        price2: PropTypes.string
    };
};
