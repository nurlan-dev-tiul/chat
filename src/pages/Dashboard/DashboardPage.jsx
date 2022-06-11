import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from 'styles/pages/Dashboard.styles';
import { FriendSideBar } from 'components/FriendSideBar';
import { Messenger } from 'components/Messenger';
import { AppBar } from 'components/AppBar';
import { connectWithSocketServer } from 'socket/socketConnection';
import { SnackBar } from 'components/Snackbar';
import { logoutAction, setUserDetails } from 'store/authentication/auth.action';

const DashboardPage = () => {
	const [load, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    const [openFriendBar, setOpenFriendBar] = React.useState(false);
    const { loading } = useSelector(state => state.auth);

    React.useEffect(() => {
        setLoading(loading)
        const userDetails = localStorage.getItem('userChat');
        const spinner = document.getElementById("spinner");
        if (spinner) {
			setTimeout(() => {
				spinner.style.display = "none";
				setLoading(false);
			}, 2000);
            if (!userDetails) {
                dispatch(logoutAction());
            } else {
                setUserDetails(JSON.parse(userDetails));
                connectWithSocketServer(JSON.parse(userDetails));
            }
		}
        

        connectWithSocketServer(JSON.parse(userDetails));
    }, [dispatch, load, loading]);

    const closeFriendBar = () => {
        setOpenFriendBar(false)
    }

    return (
        <Wrapper>
            <AppBar openFriendBar={openFriendBar} setOpenFriendBar={setOpenFriendBar} />
            <FriendSideBar />
            {/* Если маленький экран то выводи этот сайдбар */}
            {openFriendBar 
                ? <FriendSideBar 
                    openFriendBar={openFriendBar} 
                    setCloseFriendBar={closeFriendBar} 
                    responseBar={true}
                    /> 
                : null
            }
            <Messenger />
            <SnackBar />
        </Wrapper>
    )
}

export default DashboardPage;