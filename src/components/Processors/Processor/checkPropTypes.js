import PropTypes from 'prop-types';

export const checkPropTypes = component => {
    component.propTypes = {
        id: PropTypes.string,
        key: PropTypes.number,
        name: PropTypes.string,
        processor: PropTypes.object,
        isAdmin: PropTypes.bool,
        description: PropTypes.string,
        price2: PropTypes.string,
        classs: PropTypes.string,
        src: PropTypes.string,
        processorArr: PropTypes.array,
        onDeleteProcessor: PropTypes.func,
        onOpenModal: PropTypes.func,
        setIsShowConfirm: PropTypes.func,
        isShowConfirm: PropTypes.bool,
        deleteSelectedProcessor: PropTypes.func
    };
};
