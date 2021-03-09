import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const Background = styled.div`
  width: 350px;
  height: 220px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px 10px 10px 10px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 440px;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 200px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-top: 0;
  margin-left: 0;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: 565px) {
    width: 330px;
    height: 310px;
  }

  
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const SignInBtn = styled(Link)`
  border-radius: 4px;
  background: #fff;
  white-space: nowrap;
  padding: 0 0 0 0;
  color: #000;
  font-size: 14px;
  outline: none;
  border: 1.5px solid #d6d6d6;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; 
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #99adcf;
  }
`;

export const SignUpBtn = styled(Link)`
  border-radius: 4px;
  background: #fff;
  white-space: nowrap;
  padding: 0 0 0 0;
  color: #000;
  font-size: 14px;
  outline: none;
  border: 1.5px solid #d6d6d6;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center; 
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #99adcf;
  }
`;

export const ModalP = styled.p`
  font-size: 18px;
`;