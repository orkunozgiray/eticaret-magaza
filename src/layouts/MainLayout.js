import React, { useState } from 'react';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar toggle={toggle} {...props} />
            <Sidebar isOpen={isOpen} toggle={toggle} {...props}/>
            <div className="main">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
