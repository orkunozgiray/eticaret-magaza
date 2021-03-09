import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin 
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrapper,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };
    
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Need Help?</FooterLinkTitle>
                                <FooterLink to='contactus'>Contact Us</FooterLink>
                                <FooterLink to='/'>Shipping Services</FooterLink>
                                <FooterLink to='/'>Payment Options</FooterLink>
                                <FooterLink to='/'>Returns and Excanges</FooterLink>
                                <FooterLink to='/'>Product Care</FooterLink>
                                <FooterLink to='/'>FAQs</FooterLink>
                                <FooterLink to='/'>Unsubscribe</FooterLink>
                                <FooterLink to='/'>How to Shop</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>The Company</FooterLinkTitle>
                                <FooterLink to='aboutus'>About Etiquette</FooterLink>
                                <FooterLink to='/'>Code of Ethics</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Legal</FooterLink>
                                <FooterLink to='/'>Privacy and Cookies</FooterLink>
                                <FooterLink to='/'>Corporate Information</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Find Us On</FooterLinkTitle>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Pinterest</FooterLink>
                                <FooterLink to='/'>Snapchat</FooterLink>
                                <FooterLink to='/'>TikTok</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Exclusive Services</FooterLinkTitle>
                                <FooterLink to='/'>Services</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>ETIQUETTE</SocialLogo>
                            <WebsiteRights>ETIQUETTE © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                            <SocialIconLink href={'//www.facebook.com/'} target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.instagram.com/'} target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.youtube.com/watch?v=rwg9yTi4np8'} target='_blank' aria-label='Youtube' rel="noopener noreferer">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href={'//twitter.com/?lang=en'} target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.linkedin.com/'} target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
}

export default Footer;
