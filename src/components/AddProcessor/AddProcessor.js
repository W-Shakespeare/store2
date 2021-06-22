import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import { Btn } from '../../utils/material/button';
import { useStyles } from './useStyles';
import { checkPropTypes } from './checkPropTypes';

export const AddProcessor = ({
    nameValue,
    descriptionValue,
    priceValue,
    isAdmin,
    onInputChange,
    willAddProcessor
}) => {
    const classes = useStyles();

    return (
        <>
            {!isAdmin && (
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
                    Access is denied
                </div>
            )}
            {isAdmin && (
                <div className={classes.root}>
                    <form
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            alignItems: 'center'
                        }}
                    >
                        <h3>Add Items</h3>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={nameValue}
                                name="classs"
                                onChange={e => onInputChange(e)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <StorefrontIcon />
                                    </InputAdornment>
                                }
                                required="true"
                                placeholder="Name of the added product"
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="standard-adornment-amount">Description</InputLabel>
                            <Input
                                name="description"
                                required="true"
                                id="standard-adornment-amount"
                                value={descriptionValue}
                                onChange={e => onInputChange(e)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <DescriptionIcon />
                                    </InputAdornment>
                                }
                                placeholder="Description of the added product"
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
                            <Input
                                name="price2"
                                required="true"
                                id="standard-adornment-amount"
                                value={priceValue}
                                onChange={e => onInputChange(e)}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AttachMoneyIcon />
                                    </InputAdornment>
                                }
                                placeholder="The cost of the added product"
                            />
                        </FormControl>
                        <Btn
                            onClick={willAddProcessor}
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon />}
                        >
                            Add
                        </Btn>
                    </form>
                </div>
            )}
        </>
    );
};
checkPropTypes(AddProcessor);
export default AddProcessor;
