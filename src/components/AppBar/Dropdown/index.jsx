import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { Avatar, Typography } from '@mui/material';
import { stringAvatar } from 'utils/avatarColor';
import { avatarColorOption } from 'styles/global.styles';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { logoutAction } from 'store/authentication/auth.action';
import {MainContainer} from './Dropdown.styles'

export const Dropdown = ({username}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    //! Logout
    const handleLogout = () => {
        dispatch(logoutAction());
        setAnchorEl(null);
    };

    return (
        <MainContainer>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{textTransform: 'none'}}
            >
                <Avatar {...stringAvatar(username, {...avatarColorOption})}>
                    {username.substring(0, 1)}
                </Avatar>
                <Typography sx={{marginLeft: '10px', color: 'black', fontSize: '15px'}}>{username}</Typography>
                <ArrowDropDownOutlinedIcon sx={{color: 'black'}} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClick={() => setAnchorEl(!open)}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
            </Menu>
        </MainContainer>
    );
}