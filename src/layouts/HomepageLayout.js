import React, { useState } from 'react';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const HomepageLayout = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fullHeight">
            <Navbar toggle={toggle} {...props} />
            <Sidebar isOpen={isOpen} toggle={toggle} {...props}/>
            {props.children}
            <Footer />
        </div>
    );
};

export default HomepageLayout;
