import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinks,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totatlNumCartItems: selectCartItemsCount(state)
});

const Sidebar = ({ isOpen, toggle }) => {

    const dispatch = useDispatch();
    const { currentUser, totatlNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };
    
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLinks to='news' onClick={toggle}>WHAT'S NEW</SidebarLinks>
                        <SidebarLinks to='sale' onClick={toggle}>SALE</SidebarLinks>
                        <SidebarLinks to='women' onClick={toggle}>WOMEN</SidebarLinks>
                        <SidebarLinks to='men' onClick={toggle}>MEN</SidebarLinks>
                        <SidebarLinks to='blog' onClick={toggle}>MAGAZINE</SidebarLinks>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;
