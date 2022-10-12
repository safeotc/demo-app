import DemoSettings from '../../components/side/demoSettings/DemoSettings';
import Logo from '../../components/side/Logo';
import Nav from '../../components/side/nav/Nav';

const Side = () => {
    return (
        <div className="o-side">
            <Logo />
            <Nav />
            <DemoSettings />
        </div>
    );
};

export default Side;
