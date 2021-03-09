import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#414D60' : '#414D60')};
    height: 80px;
    margin-top: -90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 960px) {

    }
`;

export const NavLogo = styled(LinkR)`
    color:  #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    letter-spacing: 10px;
    display: flex;
    align-items: center;
    margin-left: -40px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 960px) {
        margin-left: 40px;
        font-size: 1.8rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -4px;
        right: -10px;
        transform: translate(-100%, 60%);
        font-size: 2.2rem;
        cursor: pointer;
        color: #fff;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 14px;
    letter-spacing: 1px;
    word-spacing: 2px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &.active {
        border-bottom: 3px solid red;
    }

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #fff;
        color: #000;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 -80px 0 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

// export const NavBtnLink = styled(LinkR)`
//     border-radius: 18px;
//     white-space: nowrap;
//     margin: 10px -70px 0 75px;
//     padding: 10px 10px;
//     color: #fff;
//     font-size: 11px;
//     outline: none;
//     border: 1.5px solid #ccd5f0;
//     cursor: pointer;
//     transition: all 0.4s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.4s ease-in-out;
//         background: #d0e2f2;
//         color: #010606;
//     }
// `;

export const NavSearch = styled.div`
    color: #fff;
    font-size: 20px;
    margin: 5px -10px 0 35px;
    padding: 10px 70px 0 80px;
    cursor: pointer;

    &:hover {
        transition: all 0.4s ease-in-out;
    }
`;
export const NavCart = styled(LinkR)`
    color: #fff;
    font-size: 18px;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ButtonModal = styled(LinkR)`
    background: transparent;
    border-radius: 18px;
    white-space: nowrap;
    margin: 10px -70px 0 75px;
    padding: 10px 10px;
    color: #fff;
    font-size: 11px;
    outline: none;
    border: 1.5px solid #ccd5f0;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #d0e2f2;
        color: #010606;
    }
`;