import React from 'react';
import Footer from './main/Footer';
import Header from './main/Header';
import MainContent from './main/Main';

const Main: React.FC = () => {
    return (
        <div className="o-main">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Main;
