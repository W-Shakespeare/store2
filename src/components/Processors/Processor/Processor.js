import React from 'react';
import * as M from '../../../utils/material/allImport';
import { Btn } from '../../../utils/material/button';
import styled from 'styled-components';
import ResponsiveDialog from '../../../utils/material/confirm';
import { useStyles } from './useStyles';
import { checkPropTypes } from './checkPropTypes';

const defSrc = 'https://cs.pikabu.ru/post_img/big/2013/08/24/1/1377296637_1500370441.png';

const StyledCard = styled(M.Card)(() => ({
    width: 320,
    margin: 10,
    border: 'solid 2px gainsboro',
    '&:hover': {
        backgroundColor: 'rgb(238, 236, 236)',
        cursor: 'pointer'
    }
}));

export const Processor = ({
    processor,
    id,
    src,
    description,
    price2,
    isAdmin,
    classs,
    onDeleteProcessor,
    onOpenModal,
    setIsShowConfirm,
    isShowConfirm
}) => {
    const classes = useStyles();
    return (
        <>
            {isShowConfirm && (
                <ResponsiveDialog
                    setIsShowConfirm={setIsShowConfirm}
                    isShowConfirm={isShowConfirm}
                    onDeleteProcessor={() => onDeleteProcessor(id)}
                    isDeleteAllProcessors={false}
                    text={'Do you want delete this processor?'}
                />
            )}
            <StyledCard>
                <M.CardHeader className={classes.header} title={classs} />
                <M.CardMedia className={classes.media} image={src ? src : defSrc} title={classs} />
                <M.CardContent>
                    <M.Typography align="center" variant="h6" color="textSecondary" component="p">
                        {description}
                    </M.Typography>
                    <M.Typography align="center" variant="h6" color="textSecondary" component="p">
                        {`Цена ${price2} грн`}
                    </M.Typography>
                </M.CardContent>
                <M.CardActions style={{ justifyContent: 'center' }} disableSpacing>
                    <Btn
                        variant="contained"
                        color="secondary"
                        startIcon={<M.DeleteIcon />}
                        onClick={() => setIsShowConfirm(true)}
                        disabled={!isAdmin}
                    >
                        Delete
                    </Btn>
                    <Btn
                        variant="contained"
                        color="primary"
                        startIcon={<M.EditOutlinedIcon />}
                        onClick={() => onOpenModal(processor)}
                        disabled={!isAdmin}
                    >
                        Edit
                    </Btn>
                </M.CardActions>
            </StyledCard>
        </>
    );
};
checkPropTypes(Processor);
export default Processor;
