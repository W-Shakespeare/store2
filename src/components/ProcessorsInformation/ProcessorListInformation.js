import React from 'react';
import { Btn } from '../../utils/material/button';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import ResponsiveDialog from '../../utils/material/confirm';
import { checkPropTypes } from './checkPropTypes';
import { StyledProcessorListInfo, Wrapper, Item } from './StyledProcessorListInfo';

export const ProcessorListInformation = ({
    sumOfPrice,
    average,
    amountItems,
    isAdmin,
    onClearAllProcessor,
    isShowConfirm,
    setIsShowConfirm
}) => {
    return (
        <>
            {isShowConfirm && (
                <ResponsiveDialog
                    setIsShowConfirm={setIsShowConfirm}
                    isShowConfirm={isShowConfirm}
                    onClearAllProcessor={onClearAllProcessor}
                    isDeleteAllProcessors={true}
                    text={'Do you want delete all processors?'}
                />
            )}

            <Box boxShadow={1} m={1} p={1} style={{ top: 80 }}>
                <Wrapper>
                    <StyledProcessorListInfo>
                        <Item>{`Общее кол-во товаров ${amountItems}`}</Item>
                        <Item>{`Общая сумма ${sumOfPrice} грн`}</Item>
                        <Item>{`Средняя цена ${average} грн`}</Item>
                        <Btn
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => setIsShowConfirm(true)}
                            disabled={!isAdmin}
                        >
                            Очистить каталог
                        </Btn>
                    </StyledProcessorListInfo>
                </Wrapper>
            </Box>
        </>
    );
};

checkPropTypes(ProcessorListInformation);
export default ProcessorListInformation;
