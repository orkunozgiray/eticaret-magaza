import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
// import SignInModal from './SignInModal';
import {
    Nav, 
    NavContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavSearch,
    ButtonModal,
    ModalContainer,
    NavCart
} from './NavbarElements';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totatlNumCartItems: selectCartItemsCount(state)
});

const Navbar = ({ toggle }) => {

    const dispatch = useDispatch();
    const { currentUser, totatlNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };


    const [scrollNav, setScrollNav] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop()
    };


    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>Berceste</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='/search'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                spy={true}
                                offset={-80}
                            >
                                WHAT'S NEW
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='/search'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                spy={true}
                                offset={-80}
                            >
                                SALE
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='/search'
                                smooth='true'
                                duration={1200} 
                                exact='true'
                                spy={true}
                                offset={-80}
                            >
                                WOMEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='/search'
                                smooth='true'
                                spy={true}
                                duration={1200} 
                                exact='true' 
                                offset={-80}
                            >
                                MEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='/search'
                                smooth='true'
                                duration={1200} 
                                exact='true'
                                spy={true} 
                                offset={-80}
                            >
                                MAGAZINE
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavCart to ="/cart">
                            <FaShoppingCart /> ({totatlNumCartItems})
                        </NavCart>

                        <ModalContainer>
                            {currentUser && [
                                <ButtonModal
                                    onClick={openModal}
                                    to='/dashboard'
                                    smooth='true'
                                    duration={1200} 
                                    exact='true' 
                                    offset={-80}
                                >    
                                    My Account
                                </ButtonModal>,
                                <ButtonModal
                                   onClick={() => signOut()}
                                >    
                                    Logout
                                </ButtonModal>
                            ]}

                            {!currentUser && [
                                <ButtonModal
                                    to="/registration"
                                >
                                    Register
                                </ButtonModal>,
                                <ButtonModal
                                    to="/login"
                                >
                                    Login
                                </ButtonModal>
                            ]}
                            {/* <SignInModal showModal={showModal} setShowModal={setShowModal} /> */}
                            {/* <GlobalStyle /> */}
                        </ModalContainer>


                        <NavSearch>
                            <FaSearch />
                        </NavSearch>
                    </NavBtn>
                </NavContainer>
            </Nav>  
        </>
    );
}

export default Navbar;
