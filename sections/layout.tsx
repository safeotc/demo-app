import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="o-content">
            <div className="o-content__background">{children}</div>
        </div>
    );
};

export default Layout;
