import React from 'react';
import Footer from './main/Footer';
import Header from './main/Header';
import Main from './main/Main';

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="o-content">
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Content;
