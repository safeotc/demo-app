import PrimaryButton from '../../forms/buttons/PrimaryButton';
import WalletIcon from '../../icons/WalletIcon';

interface ConnectButtonProps {
    connect: () => void;
}

const ConnectButton = ({ connect }: ConnectButtonProps) => {
    return (
        <PrimaryButton inlineOnMobile={true} icon={<WalletIcon />} onClick={connect}>
            Connect
        </PrimaryButton>
    );
};

export default ConnectButton;
