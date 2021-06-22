import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    ModalCenter,
    ModalContainer,
    StyledBox,
    StyledModal,
    StyledModalButtons
} from './StyledModalWindow';
import { checkPropTypes } from './checkPropTypes';

export const ModalWindow = ({
    selectedCard,
    changeCardData,
    onCloseModal,
    classs,
    description,
    price2
}) => {
    const [nameInp, setNameInp] = useState(classs);
    const [descriptionInp, setDescriptionInp] = useState(description);
    const [priceInp, setPriceInp] = useState(price2);
    return (
        <ModalContainer>
            <ModalCenter>
                <StyledModal>
                    <StyledBox
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            value={nameInp}
                            onChange={e => setNameInp(e.target.value)}
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            placeholder="Name of the edit product"
                        />
                        <TextField
                            value={descriptionInp}
                            onChange={e => setDescriptionInp(e.target.value)}
                            id="standard-basic"
                            label="Description"
                            variant="standard"
                            placeholder="Description of the edit product"
                        />
                        <TextField
                            value={priceInp}
                            onChange={e => setPriceInp(e.target.value)}
                            id="standard-basic"
                            label="Price"
                            variant="standard"
                            placeholder="The cost of the edit product"
                        />
                    </StyledBox>
                    <StyledModalButtons>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                changeCardData({
                                    ...selectedCard,
                                    classs: nameInp,
                                    description: descriptionInp,
                                    price2: priceInp
                                })
                            }
                        >
                            Edit
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => onCloseModal()}>
                            Close
                        </Button>
                    </StyledModalButtons>
                </StyledModal>
            </ModalCenter>
        </ModalContainer>
    );
};
checkPropTypes(ModalWindow);
export default ModalWindow;
