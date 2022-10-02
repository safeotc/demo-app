interface AppLayoutProps {
    sideContent: JSX.Element;
    mainContent: JSX.Element;
}

const AppLayout = ({ sideContent, mainContent }: AppLayoutProps) => {
    return (
        <div className="o-content-wrapper">
            <div className="o-content-wrapper__container">
                <div className="o-content-wrapper__navigation">{sideContent}</div>
                <div className="o-content-wrapper__content">{mainContent}</div>
            </div>
        </div>
    );
};

export default AppLayout;
