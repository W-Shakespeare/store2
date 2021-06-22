import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledList } from './styledSideBar';
import StoreIcon from '@material-ui/icons/Store';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const SideBarDesktop = ({ classes, theme, open, handleDrawerClose }) => {
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <StyledList>
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
                    >
                        <ListItem button key={obj.text}>
                            <ListItemIcon>{obj.icon}</ListItemIcon>
                            <ListItemText primary={obj.text} />
                        </ListItem>
                    </NavLink>
                ))}
            </StyledList>
        </Drawer>
    );
};
