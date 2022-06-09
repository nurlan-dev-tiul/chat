import React from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from './Dropdown';
import { MainContainer, MenuToggleIcon, MenuCloseIcon } from './AppBar.styles';

export const AppBar = ({openFriendBar, setOpenFriendBar}) => {


    const { userDetails } = useSelector(store => store.auth);

    //! Для маленьких экранов кнопка на появление сайдбара
    const toggleBarHandle = () => {
        setOpenFriendBar(!openFriendBar)
    }

    return (
        <MainContainer>
            {openFriendBar ? (
                <MenuCloseIcon onClick={toggleBarHandle} />
            ) : (
                <MenuToggleIcon onClick={toggleBarHandle} />
            )}
            <Dropdown username={userDetails?.username} />
        </MainContainer>
    )
}
