import React from 'react';
import { NavLink } from 'react-router-dom';
import StoreIcon from '@material-ui/icons/Store';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { StyledList } from './styledSideBar';

export const SideBarMobile = ({ classes, theme, open, handleDrawerClose }) => {
    return (
        <Drawer anchor={'top'} open={open}>
            <Divider />
            <StyledList className={classes.flexCenter} style={{ flexDirection: 'column' }}>
                {[
                    { text: 'Processors', icon: <StoreIcon /> },
                    { text: 'Add processors', icon: <AddIcon /> }
                ].map((obj, i) => (
                    <NavLink
                        key={i}
                        to={
                            i == 0
                                ? '/'
                                : obj.text == 'Add processors'
                                ? `/Additem`
                                : `/${obj.text}`
                        }
                        style={{ width: '100%' }}
                        className={classes.flexCenter}
                    >
                        <ListItem
                            button
                            key={obj.text}
                            className={classes.flexCenter}
                            style={{ width: 250, justifyContent: 'space-evenly' }}
                        >
                            <p>{obj.icon}</p>
                            <p style={{ width: 100 }}> {obj.text} </p>
                        </ListItem>
                    </NavLink>
                ))}
            </StyledList>
            <div className={classes.toolbarMobile}>
                <IconButton onClick={handleDrawerClose}>
                    <KeyboardArrowUpIcon fontSize={'large'} />
                </IconButton>
            </div>
        </Drawer>
    );
};
