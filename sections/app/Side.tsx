import DemoProgress from '../../components/side/demoProgress/DemoProgress';
import Logo from '../../components/side/Logo';
import Nav from '../../components/side/nav/Nav';

const Side = () => {
    return (
        <div className="o-side">
            <Logo />
            <Nav />
            <DemoProgress />
        </div>
    );
};

export default Side;
